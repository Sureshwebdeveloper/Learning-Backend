// Loggin MiddleWare 
import express from "express";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 4000;

app.use(morgan());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
