/**
 * Secure API Key Storage using IndexedDB.
 *
 * Keys are XOR-obfuscated before storage so they never sit as plain text
 * in the database.  This is NOT military-grade encryption – it prevents
 * casual shoulder-surfing in DevTools.  The real security boundary is that
 * the key is NEVER committed to source or embedded in the build artefact.
 */

const DB_NAME = 'medcanna_settings';
const STORE_NAME = 'secrets';
const KEY_ID = 'gemini_api_key';

// Simple XOR obfuscation (not cryptographic – defence-in-depth only)
const OBF_KEY = 'MedCanna2025!';

function xorObfuscate(plain: string): string {
  return Array.from(plain)
    .map((c, i) => String.fromCharCode(c.charCodeAt(0) ^ OBF_KEY.charCodeAt(i % OBF_KEY.length)))
    .join('');
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function saveApiKey(key: string): Promise<void> {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  tx.objectStore(STORE_NAME).put(xorObfuscate(key), KEY_ID);
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function loadApiKey(): Promise<string | null> {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const req = tx.objectStore(STORE_NAME).get(KEY_ID);
  return new Promise((resolve, reject) => {
    req.onsuccess = () => {
      const val = req.result as string | undefined;
      resolve(val ? xorObfuscate(val) : null);   // XOR is symmetric
    };
    req.onerror = () => reject(req.error);
  });
}

export async function deleteApiKey(): Promise<void> {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  tx.objectStore(STORE_NAME).delete(KEY_ID);
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
