import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1>");
}); // requests Homepage "/" and sends back the response "Homepage" which is rendered on the Hompage

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Nina</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +0173-1234567</p>");
});

app.get("/impressum", (req, res) => {
  res.send("<h1>Impressum</h1><p>Address: Munich</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
