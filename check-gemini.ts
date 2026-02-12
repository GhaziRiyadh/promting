
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as dotenv from 'dotenv';
dotenv.config();

async function listModels() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error('GEMINI_API_KEY not found in .env');
        return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // There isn't a direct "listModels" on the instance in some versions, 
    // but let's try to run a simple fallback first: just try gemini-pro

    console.log("Trying gemini-pro...");
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const result = await model.generateContent('Hello');
        console.log("Success with gemini-pro!");
        console.log(result.response.text());
    } catch (e: any) {
        console.log("Failed gemini-pro:", e.message);
    }

    console.log("\nTrying gemini-1.5-flash...");
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent('Hello');
        console.log("Success with gemini-1.5-flash!");
        console.log(result.response.text());
    } catch (e: any) {
        console.log("Failed gemini-1.5-flash:", e.message);
    }
}

listModels();
