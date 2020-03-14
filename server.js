let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
let port = 3000;

app.get("/get", function(req, res) {
  res.send("Get request body");
});

app.post("/post", function(req, res) {
  let requestBody = req.body;
  res.send({ requestBody: requestBody });
});

app.listen(port, function() {
  console.log("Listening on Port", port);
});
