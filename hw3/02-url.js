const http = require("http");

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const routes = [
    "/attributes?hello=world&lorem=ipsum",
    "/items?first=1&second=2&third=3&fourth=4",
    "/characters?spongebob=squarepants&patrick=star&sandy=cheeks",
  ];

  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL
  let url = new URL(req.url, `http://${req.headers.host}`);

  let getRoutes = () => {
    let result = "";

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );

    return result;
  };

  if (req.url === "/") {
    let routeResults = getRoutes();

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>Exercise 02</h1>`);

    res.write(`<ul> ${routeResults} </ul>`);
  }

  // Add your code here
  //Check if url query exists in url
  else if (url.search.length >= 1) {
    //Variable to append any extra strings from query
    let stringTable = "";
    //Search for each value and key in params
    for (const [key, value] of url.searchParams) {
      //Append the html row/col
      stringTable += `<tr> <td> ${key} </td> <td> ${value} </td> </tr>`;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<table style='border: 1px solid'> ${stringTable} </table>`);
  }
  //error if no match
  else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h3>Error: No parameters found in ${url}.</h3>`);
  }
  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
