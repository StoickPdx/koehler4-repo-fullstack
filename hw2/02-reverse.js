/** Exercise 02 - Reverse **/

// Input of elemends from HTML
let userInput = document.getElementById("input");
//Input element for button
let reverseButton = document.getElementById("reverse");
//get out put of all work
let userOutput = document.getElementById("output");
//use html button to hand when button is pressed
reverseButton.addEventListener("click", handleClick);
//Function to deal with click
function handleClick(event) {
  // print out screen that button used
  console.log("Clicked", event);

  let result = reverseNumber(userInput.value);

  if (userInput.value.length === 8) {
    userOutput.style.color = "green";
    userOutput.style.marginTop = "12px";
    userOutput.textContent = userInput.value + " --> " + result;
  } else {
    userOutput.style.color = "red";
    userOutput.style.marginTop = "12px";
    userOutput.textContent = "Error: Please input an 8-digit number";
  }
}

const reverseNumber = (input) => {
  // turn into string, split the number, reverse array, rejoin
  let reverseInt = parseInt(input.toString().split("").reverse().join(""));
  return reverseInt;
};
