import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs"
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;
var street = "";
var pet = "";

app.use(bodyParser.urlencoded({ extended: true }));

const output = (req, res, next) => {
  console.log(req.body);
  street = req.body["street"];
  pet = req.body["pet"];
  next();
};

app.use(output);

app.get("/", (req, res) => {
  res.sendFile(__dirname+ "/public/index.html");
});

app.post("/submit",(req,res) =>{
 res.send( `<h1>The band name is : ${street}</h1> <h2>${pet}🥳</h2> `);
})

app.listen(port, () => {


    console.log(`Listening on port ${port}`);
});
