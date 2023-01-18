const express = require("express");
//create express app
const app = express();
const cors = require("cors");
const { response } = require("express");
require("dotenv").config();

let count = 0;
//create end point
app.use((req, res, next) => {
  console.log("received-req");
  console.log(count++);
  next();
});
app.use(cors());
app.post("/authenticate", (req, res) => {
  console.log(req.params);
  console.log(req);
});
app.get("/.well-known/com.apple.remotemanagement", (request, response) => {
  const json = {
    Servers: [
      {
        Version: "mdm-byod",
        BaseURL:
          "https://10.53.76.135:9383/api/mdm/accountdrivenuserenrollment?templateToken=a27001999bd1f012cf3e6b67f3b3edfc&encapiKey=cc63d1eb"
      }
    ]
  };
  console.log(json);
  response.json(json);
  response.status(200);
});

//start server and listen for the request
app.listen(process.env.PORT, () =>
  //a callback that will be called as soon as server start listening
  console.log(
    `server is listening at http://localhost:${process.env.PORT || 3000}`
  )
);
