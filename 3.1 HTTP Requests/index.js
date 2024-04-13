import express from "express";
const app = express();
const port = "3000";

app.get("/", (req,res) => {
   res.send("<h2>Hello WORLD</h2>")
   res.end()
})

app.get("/about",(req,res) => {
    res.send("<h1>About Page</h1>")
})

app.listen(port,() => {
    console.log(`server started port ${port}`);
})

