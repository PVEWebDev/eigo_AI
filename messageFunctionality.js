    //These are a series of variables to test the export/import functionality in a separate file
const self1 = "Hello, my name is Patrick. ";
const self2 = "I come from Denmark, and am am 30 years old. ";
const self3 = "I am trying to build a web tool that will help people learn English";
export {self1, self2, self3}
      //remember to add a packacke.json to the project folder, when using this in the inline code for the HTML

    //Below is testing how to put in and take out output from an external source
      // It currently uses the free tier of Gemini API model 2.5 flash
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "insert an API key" }); 

async function tryTheAI() {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: 'In list form, provide me the latin name of every word class in the English language, along with a short description of their use',
  });
  console.log(response.text);
}

tryTheAI();
