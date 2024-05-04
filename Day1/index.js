const express = require("express")
const app = express();
const category = require("./category")

app.use("/dress", category)

app.get("/", (req, res)=> {
    res.send("Home Page")    
})

app.get("/about", (req, res)=> {
    res.send("About Page")    
})

app.listen(8000)