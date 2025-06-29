//import { GoogleGenAI } from "@google/genai";
//const ai = new GoogleGenAI({ apiKey: "AI key" });    
    //Below is clean code, written by in collaboration with a LLM model, mainly used to debug or clarify structural issues with the code
      //I currently uses the free tier of Gemini API model 2.5 flash
      import { GoogleGenerativeAI  } from "https://esm.run/@google/generative-ai";
      const ai = new GoogleGenerativeAI ({ apiKey: "insert API key" });
          //above is an alternative way to call and import the AI functionality, due to my browser not allowing it to be done in the clean way

// MAIN function to call AI with user input
async function aiUserInteraction() {
  const userInput = document.getElementById("userInput").value;

  try {
    const model = ai.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(userInput);

    const output = result.response.text(); 
    document.getElementById("response").innerText = output;

  } catch (error) {
    console.error(error);
    document.getElementById("response").innerText = "Error: " + error.message;
  }
}

document.getElementById("aiSendButton").addEventListener("click", aiUserInteraction);
document.getElementById("userInput").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    aiUserInteraction();
  }
});

//currently, the command and prompt turnover is parsed correctly, but there is an error in the HTML output regarding authentication of the API key
