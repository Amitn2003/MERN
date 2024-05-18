const express = require("express");
const route = express.Router();


route.get("", (req, res) => {
    res.send("Route Home");
});

route.get("/route-path", (req, res) => {
    res.send("Route Path---");
});

module.exports = route;