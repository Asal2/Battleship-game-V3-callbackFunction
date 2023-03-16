//load HTTP module
const http = require("http");
const url = require("url");

//load local quote generator module
const getcodrinate = require("./ battleShipMoves.js");

//set up server
const hostname = "127.0.0.1";
const port = 3000;

//create server
const server = http.createServer((req, res) => {
  const myUrl = url.parse(req.url, true);

  const mybatch = myUrl.query.batch;
  console.log("this is mybatch: " + mybatch);
  if (mybatch === undefined) {
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    let myfunc = function (data) {
      res.end(JSON.stringify(data));
    };
    //create a response message
    getcodrinate.generateCoordinates(myfunc);
  } else if (mybatch !== NaN && mybatch <= 10) {
    res.statusCode = 200;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    let myfunc = function (data) {
      res.end(JSON.stringify(data));
    };
    getcodrinate.generateMutipleCoordinates(mybatch, myfunc);
  } else {
    res.statusCode = 404;
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text");
    console.error('not a number');
    res.end('Sorry didnt find what you were looking for');
  }
});

//start server listening
// if using replit  use server.listen( () => {
//e.g. server.listen( () => {
// if using the code below doesn't work try server.listen(port, () => {
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
