import { GoogleGenAI } from "@google/genai";

export const generateBio = async (keywords: string): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }
  
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `Based on these keywords: "${keywords}", write a short, friendly, and casual "About Me" bio in the first person, around 3-4 sentences long. Make it sound like I'm talking to a friend.`;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating bio with Gemini API:", error);
    return "Sorry, I couldn't generate a bio at this moment. Please try again.";
  }
};