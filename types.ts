
export interface SubPoint {
  label: string; // e.g., "i", "ii"
  text: string;
}

export interface CompetencyPoint {
  letter: string; // e.g., "a", "b"
  text: string;
  subPoints?: SubPoint[];
}

export interface CompetencyDomain {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  points: CompetencyPoint[];
}

export type ViewState = 'dashboard' | 'curriculum' | 'tutor' | 'quiz' | 'simulation' | 'pharmacology' | 'about' | 'settings' | 'help';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  domainId: number;
}

// --- New Types for Plant Guide ---

export type CompoundCategory = 'cannabinoid' | 'terpene' | 'flavonoid';

export interface PlantCompound {
  id: string;
  name: string;
  category: CompoundCategory;
  description: string;
  therapeuticEffects: string[];
  commonConditions: string[];
  entourageRole?: string; // Description of how it interacts with others
  boilingPoint?: string;
}

// --- New Types for Clinical Simulator ---

export type ProductType = 'THC-Dominant' | 'CBD-Dominant' | 'Balanced 1:1' | 'CBD-Isolate';
export type RouteOfAdmin = 'Inhalation (Vaporized)' | 'Oral (Edible/Capsule)' | 'Sublingual (Tincture)' | 'Topical';

export interface FollowUpOption {
  label: string;
  isCorrect: boolean;
  feedback: string;
}

export interface DrugInteraction {
  medication: string;
  severity: 'High' | 'Moderate' | 'Low';
  mechanism: string; // e.g. CYP3A4 inhibition
}

export interface HistoryPoint {
  week: number;
  doseMg: number;
  symptomScore: number; // 0-10 scale (10 is worst)
  sideEffectScore: number; // 0-10 scale
}

export interface PatientCase {
  id: string;
  name: string;
  age: number;
  condition: string;
  tags: string[]; // For Quick Start (e.g., "Geriatric", "Acute")
  history: string; // Brief medical history
  medications: string[]; // Current meds for display
  interactions: DrugInteraction[]; // For the checklist
  cannabisHistory: 'Naive' | 'Experienced';
  goals: string;
  historyData: HistoryPoint[]; // Pre-existing data for the graph
  feedback: {
    success: string; // Message if they get it right
    failure: string; // General guidance
  };
  idealTreatment: {
    productTypes: ProductType[];
    routes: RouteOfAdmin[];
    minDose: number; // mg
    maxDose: number; // mg
  };
  followUp: {
    scenario: string;
    options: FollowUpOption[];
  };
}
