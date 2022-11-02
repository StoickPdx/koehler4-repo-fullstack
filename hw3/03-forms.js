const http = require("http");
const { URLSearchParams } = require("url");
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

const postHTML = `<html><body>
<form method='post' action='/submit'>

<label for="Name">Name: </label><br/>
<input type="text" name="Name" id="Name"><br/>

<label for="Email">Email: </label><br/>
<input type="text" name="Email" id="Email"><br/>

<label for="Comments">Comments: </label><br/>
<textarea name="Comments" id="Comments"></textarea><br/>

<input type="checkbox" name="check" id="check">
<label for="check">Sign up for the newsletter: </label><br/>

<input type='submit'>
</form></body></html>`;

//create a server to use form
const server = http.createServer((req, res) => {
  //check form exists
  if (req.url === "/form") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(postHTML);
    res.end();
  } else if (req.url === "/submit") {
    // Get data from form
    let body = "";
    res.writeHead(200, { "Content-Type": "text/html" });
    req.on("data", (chunk) => {
      body += chunk;
      console.log("data: " + body);
    });
    //Submite the page and post data
    req.on("end", () => {
      console.log("data: " + body);
      res.writeHead(200, { "Content-Type": "text/html" });
      const paramsResult = new URLSearchParams(body);
      //Create array of key/vaue pairs
      let keyArr = [];
      let valueArr = [];
      paramsResult.forEach((value, key) => {
        keyArr.push(key);
        valueArr.push(value);
      });
      // Check box Check
      if (keyArr.length === 4) {
        for (let i = 0; i < 3; i++) {
          res.write(`${keyArr[i]}: ${valueArr[i]} <br>`);
        }
        res.write("Yes, sign me up for the newsletter");
      } else {
        for (let i = 0; i < keyArr.length; i++) {
          res.write(`${keyArr[i]}: ${valueArr[i]} <br>`);
        }
        res.write("No, Thank you");
      }
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
