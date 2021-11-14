const express = require("express");
const app = express();
const cors = require("cors");

const connect = require("./configs/db");

app.use(cors());
app.use(express.json());

app.listen(8080, async function () {
  await connect();
  console.log("Listening to Port 8080");
});
