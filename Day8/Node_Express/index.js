const express = require("express");
const app = express();

const departments = require("./routes");

app.use("/dept", departments);

app.get("", (req, res) => {
    res.send("Hello from College home page");
});

app.get("/reviews", (req, res) => {
    res.send("College Reviews");
});

app.listen(8000);