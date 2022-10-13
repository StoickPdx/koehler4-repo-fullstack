/** Exercise 04 - API **/

//Brian Koehler
//Full Stack - Portland State

const url = "https://restcountries.com/v3.1/all";

// Add your code here
// create query for use in fucntion addcountry
let mainList = document.querySelector("#results");

//Makes the list of the countries with the -
const addCountry = (countryName) => {
  //Make a list of the items
  let listItem = document.createElement("li");
  // add commas to population
  listItem.textContent =
    countryName.name.common +
    " - " +
    countryName.population.toLocaleString("en-US");
  //append to list
  mainList.append(listItem);
};

const getData = async (url) => {
  //check for error if data doesnt load
  let response = await fetch(url);
  // response.ok checks that a fetch was successful
  if (response.ok) {
    //Await for json response and fetich the API data
    const jsonData = await response.json();
    //Display data with title
    console.log("Fetch all countries.");
    //Print to console
    console.log(jsonData);
    //Sort alphabetically
    jsonData.sort((a, b) => a.name.common.localeCompare(b.name.common));
    //Beginning add one at a time via loop
    jsonData.forEach((item) => {
      addCountry(item);
    });
  } else {
    alert("HTTP-Error: " + response.status);
  }
};

getData(url);
