
export enum Category {
  ALL = 'All',
  GRAPHIC_DESIGN = 'Graphic Design',
  VIDEO_EDITING = 'Video Editing',
  AI_PROMPTS = 'AI Prompts'
}

export interface Project {
  id: number;
  title: string;
  category: Category;
  description: string;
  imageUrl: string;
  tools: string[];
  longDescription?: string;
  videoUrl?: string;
  externalLink?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface BrandKit {
  name: string;
  slogan: string;
  colorPalette: string[];
  typography: string[];
  brandVoice: string;
}
