const express = require("express");
const app = express()
const post = require("./post")

app.use("/p", post);

app.get("", (req, res) => {
    res.send("Welcome to FaceBook Home Page");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.listen(8000, ()=> {
    console.log(`App is listening on PORT http://localhost:8000/`)
})