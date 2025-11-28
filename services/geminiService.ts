
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { getCurriculumData } from '../data/curriculumData';

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    }
  }
  return aiClient;
};

export const generateTutorResponse = async (
  userMessage: string,
  history: { role: 'user' | 'model'; text: string }[],
  language: 'en' | 'de' = 'en'
): Promise<string> => {
  const client = getClient();
  
  if (!client) {
    return language === 'de' 
      ? "API-Schlüssel fehlt. Bitte stellen Sie sicher, dass die Anwendung korrekt konfiguriert ist."
      : "API Key is missing. Please ensure the application is configured correctly.";
  }

  const { competencies } = getCurriculumData(language);

  // Construct a system context string from the structured data
  const SYSTEM_CONTEXT = `
You are an expert Medical Educator and Clinical Consultant specializing in Cannabinoid Medicine.
Your knowledge base is strictly grounded in the "Medical Cannabis Competencies (Final and Complete Version)" by Zolotov Y et al. (2025), published in JAMA Network Open.

Your goal is to help clinicians, students, and researchers understand these competencies.
Current Language Context: ${language === 'de' ? "GERMAN (Deutsch)" : "ENGLISH"}.
You MUST answer in ${language === 'de' ? "German" : "English"}.

Here is the curriculum structure you must adhere to:
${JSON.stringify(competencies, null, 2)}

Instructions:
1. Answer queries specifically referencing the competency numbers (e.g., "As noted in Competency 3.a.ii..." or "Wie in Kompetenz 3.a.ii angemerkt...").
2. Maintain a professional, academic, and clinical tone.
3. If a user asks about a topic not covered in the competencies (like a very specific recreational strain review), politely explain that your scope is limited to the clinical competencies defined in the 2025 consensus statement.
4. Be concise but comprehensive.
5. Do not provide personal medical advice; always frame answers as educational content based on the consensus statement.
`;

  try {
    const formattedHistory = history.map(h => `${h.role === 'user' ? 'User' : 'Model'}: ${h.text}`).join('\n');
    const prompt = `${SYSTEM_CONTEXT}\n\nConversation History:\n${formattedHistory}\n\nCurrent User Question: ${userMessage}\n\nAnswer:`;

    const response: GenerateContentResponse = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || (language === 'de' ? "Ich konnte keine Antwort basierend auf dem Lehrplan generieren." : "I apologize, I could not generate a response based on the curriculum.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'de' ? "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut." : "I encountered an error while consulting the curriculum. Please try again.";
  }
};
