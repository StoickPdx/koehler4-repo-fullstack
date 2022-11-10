const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

// Use middleware static() to serve all static files in the given folder
app.use(express.static("public"));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: false }));

// POST request

//To use index.html in the public folder
app.get("/", (req, res) => {
  res.redirect("/form");
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.post("/submit", (req, res) => {
  // Add your code here
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const newsletter = req.body.newsletter
    ? "Yes, Sign me up."
    : "No, Thank You.";

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Form data</h1>");

  if (name === "") {
    res.write("<h1> Not Filled Out </h1>");
  } else {
    res.write(`<p>Name: ${name}</p>`);
  }
  if (email === "") {
    res.write("<h1>Not Filled Out</h1>");
  } else {
    res.write(`<p>Email: ${email}</p>`);
  }
  res.write(`<p>Comments: ${message}</p>`);
  res.write(`<p>Newsletter: ${newsletter}</p>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
