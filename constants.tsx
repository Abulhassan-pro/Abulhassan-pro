import { Category, Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Neural Aesthetic Orchestration",
    category: Category.AI_PROMPTS,
    description: "Complex multi-modal prompt architecture for hyper-realistic digital synthesis and atmospheric control.",
    imageUrl: "https://img.sanishtech.com/u/f99fff23413bfbfddd6383193c335d89.png",
    tools: ["Prompt Engineering", "Gemini", "Midjourney", "Stable Diffusion"],
    longDescription: "This project pushes the boundaries of generative logic. By employing recursive prompting techniques and negative constraint engineering, I achieved a level of detail that captures subtle skin textures, volumetric luminescence, and complex material reflections."
  },
  {
    id: 2,
    title: "Dynamic Motion Reel",
    category: Category.VIDEO_EDITING,
    description: "A high-octane visual experience blending advanced motion graphics with precise rhythmic editing.",
    imageUrl: "https://img.sanishtech.com/u/a7d6035a1a319ebc8782b3c180025ec8.png",
    videoUrl: "https://jumpshare.com/s/m3Pju3Aqk8swXwy0g9S",
    tools: ["Premiere Pro", "After Effects", "Motion Design"],
    longDescription: "This project pushes the limits of digital storytelling. By synchronized pacing and high-fidelity transitions, this edit creates an immersive atmosphere that captures the viewer's attention from the first frame."
  },
  {
    id: 3,
    title: "Hyper-Realistic Brand Vision",
    category: Category.GRAPHIC_DESIGN,
    description: "A stunning hyper-realistic brand identity concept pushing the boundaries of visual fidelity.",
    imageUrl: "https://img.sanishtech.com/u/e30767387198097a26127b03619cea8c.png",
    tools: ["Photoshop", "Midjourney", "AI Enhancement"],
    longDescription: "This project showcases a futuristic brand identity concept where hyper-realism meets minimalist luxury. Every detail was meticulously crafted to ensure a high-end, cinematic feel that resonates with a tech-forward audience."
  },
  {
    id: 4,
    title: "Cinematic Luxury Identity",
    category: Category.GRAPHIC_DESIGN,
    description: "A premium branding concept for a luxury fashion house, blending minimalist elegance with cinematic depth.",
    imageUrl: "https://img.sanishtech.com/u/7796c3148f592ae580d189d0fac2198e.png",
    tools: ["Photoshop", "AI Generative Fill", "Brand Strategy"],
    longDescription: "This artifact represents the pinnacle of luxury brand positioning. By utilizing advanced AI enhancement and traditional high-end design principles, we've created a visual identity that commands attention."
  },
  {
    id: 5,
    title: "Ultra-Premium Automotive Branding",
    category: Category.GRAPHIC_DESIGN,
    description: "High-fidelity automotive concept design featuring sleek, aerodynamic aesthetics.",
    imageUrl: "https://img.sanishtech.com/u/ad08bda4629323017063e745a9f67eeb.png",
    tools: ["Photoshop", "AI Generative Fill", "Vector Art"],
    longDescription: "A deep dive into premium automotive aesthetics. This project explores the intersection of speed and luxury, using advanced compositing techniques to create a cohesive and powerful brand presence."
  }
];

export const SKILLS: Skill[] = [
  { name: "Web Development", level: 88, icon: "💻" },
  { name: "Python Programming", level: 82, icon: "🐍" },
  { name: "Prompt Engineering", level: 98, icon: "🤖" },
  { name: "Adobe Photoshop", level: 95, icon: "🎨" },
  { name: "Premiere Pro", level: 90, icon: "🎬" },
  { name: "Digital Marketing", level: 85, icon: "📈" },
  { name: "Gemini / AI Tools", level: 97, icon: "🧠" }
];

export const AI_TOOLS = [
  { name: "Midjourney", logo: "https://img.sanishtech.com/u/c5c14f00f28e6599fdb42ccdeb3118b0.jpg" },
  { name: "Gemini", logo: "https://img.sanishtech.com/u/7076d4854d5c9f339fe6217c313eea2b.jpg" },
  { name: "Claude AI", logo: "https://img.sanishtech.com/u/6f0089e5aeadef33f44f3ab09bdf42ff.png" },
  { name: "Runway", logo: "https://img.sanishtech.com/u/dd086a9532579114c8017ae040ad2292.png" },
  { name: "ElevenLabs", logo: "https://img.sanishtech.com/u/6306eb8ee89553ce0050569c0fbe0e20.png" },
  { name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" }
];