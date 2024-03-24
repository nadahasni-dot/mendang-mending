import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

type AskGeminiProps = { first: string; second: string };

export const askGemini = async ({
  first,
  second,
}: AskGeminiProps): Promise<string> => {
  try {
    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Lebih mending ${first} atau ${second}?`;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    const text = response.text();
    return text;
  } catch (error) {
    throw new Error("Ups terjadi kesalahan");
  }
};
