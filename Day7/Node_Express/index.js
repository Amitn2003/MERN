const express = require("express");
const app = express();

app.use("/r", require("./route"));


app.get("", (req, res) => {
    res.send("Hello World(HOME) ::::: ");
});

app.get("/about", (req, res) => {
    res.send("About US ::::: ");
});

app.listen(8000, ()=> {
    console.log(`Server is listening on PORT 8000 ...`)
})










