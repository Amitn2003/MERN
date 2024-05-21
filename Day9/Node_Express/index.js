const express = require("express");
const app = express();
const PORT = 8000;
const col = require("./routes");

app.use("/college", col);

app.get("", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});
app.listen(PORT);