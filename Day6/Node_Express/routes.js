const express = require("express")
const route = express.Router()


route.get("", (req, res) => {
    res.send("Hello from the route Home");
});

route.get("/dashboard", (req, res) => {
    res.send("Hello from the route Dashboard");
});

module.exports = route