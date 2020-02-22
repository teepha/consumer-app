import express from "express";
import config from "./config/config";
import processJob from "./queue";
import connectToDB from "./config/db";

const app = express();
const port = config.port;

connectToDB()
  .then(() => {
    console.log("Connected to DB...");
    app.listen(port, () => {
      console.log(`Listening on port ${port}...`);
    });
  })
  .catch(error => console.log("An error occured. Unable to start server."));

processJob();
