const express = require("express");
const app = express();
const cors = require("cors");

const connect = require("./configs/db");
const jobsController = require("./controllers/jobs.controller");

app.use(cors());
app.use(express.json());
app.use("/jobs", jobsController);

app.listen(8001, async function () {
  await connect();
  console.log("Listening to Port 8001");
});
