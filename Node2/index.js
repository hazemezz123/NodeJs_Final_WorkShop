const express = require("express");
const app = express();
const port = 3000;

// Home route
app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><p>Welcome to our website!</p>");
});

// About route
app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1><p>This is the about page.</p>");
});

// Contact Us route
app.get("/contact", (req, res) => {
  res.send("<h1>Contact Us</h1><p>Get in touch with us!</p>");
});

// Products route
app.get("/products", (req, res) => {
  res.send("<h1>Products</h1><p>Check out our amazing products.</p>");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
