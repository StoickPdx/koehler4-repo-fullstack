const express = require("express");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 5000;

// Add your code here

// Use the express-session module
app.use(
  session({
    store: new session.MemoryStore(),
    secret: "12345678",
    saveUninitialized: true,
    cookie: {
      maxAge: 8640000,
    },
    resave: false,
  })
);

app.use((req, res, next) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write(`Currently on route: ${req.url}\n \n`);

  console.log(req.session.visitedRoutes);
  if (req.session.visitedRoutes) {
    res.write(`Previously Visited:\n`);
    for (const route of req.session.visitedRoutes) {
      res.write(`${route}\n`);
    }
  } else {
    req.session.visitedRoutes = [];
  }

  if (req.url !== "/favicon.ico") {
    req.session.visitedRoutes.push(req.url);
  }

  next();
});

app.get("/", (req, res) => {
  // Add your code here
  res.write(`Welcome to http://${req.headers.host}`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
