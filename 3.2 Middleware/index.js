import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.env))
const app = express();
const port = "3000";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  if (error) {
    console.error(error);
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
  console.log(result);
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening to the Port On ${port}`);
});
