/** Exercise 03 - Form **/

// Add your code here
const consoleSubmit = document.getElementById("submit");

consoleSubmit.onclick = function () {
  //Console group to keep it clean on submit
  console.group("========= Form Submission =========");
  console.log("Name: " + document.getElementById("nameInput").value);
  console.log("Email: " + document.getElementById("emailInput").value);
  if (!document.getElementById("messageBox").value) {
    console.log("No feedback was submitted.");
  } else {
    console.log("Feedback: " + document.getElementById("messageBox").value);
  }
  console.log(
    "Newsletter: " +
      (document.getElementById("newsletter").checked
        ? "Yes, I would like to join the newsletter."
        : "No, thank you.")
  );
  console.groupEnd();
};
