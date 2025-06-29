     
    //the asynch below is a test function to test if the website still is able to pass data
         //the array contains a series of placeholder answers, in place of the AI output, which is WOP
  const arrayOfAnswers = [`I cannot provide an answer to this`,`Can you specify your request a bit more`,`Try to look up the answer on wikipedia`,`This question is not in the curriculum`,`This is an easy answer, if you think about it`]
  async function userInteraction() {
      // take the input from the userface box and await it before the function is activated
      const userInput = document.getElementById("userInput").value;
      const aiResponse = await fakeAIResponse(userInput);
      //Show the response
      document.getElementById("response").innerHTML = "<strong>AI:</strong> " + aiResponse;
    //this asynch function simulates a delay, like a real AI would. It then 
    async function fakeAIResponse() {
      return new Promise((resolve) => {
        const AIanswer = arrayOfAnswers[Math.floor(Math.random() * arrayOfAnswers.length)];
        setTimeout(() => {
          response.innerHTML = AIanswer;
         }, 600);
      })}}
  // event listener for using the "enter" button, alternative to using the chat button (needs to be combined)
   document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      userInteraction();
    }
  });