const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1> welcome to my home page </h1>");
  } else if (req.url === "/about") {
    res.end("<h1> here is our short history </h1>");
  } else {
    res.end(`<h1> Opps!  </h1>
  <p> Sorry, can't seem to find the page </p>
  <a href="/"> Back home </a>`);
  }
});
server.listen(5000);
console.log(` your  is running on port 5000`);
