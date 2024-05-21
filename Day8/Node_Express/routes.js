const express = require("express");
const route = express.Router();


route.get("", (req, res) => {
    res.send("All Department list...");
});
route.get("/bca", (req, res) => {
    res.send("BCA Department");
});

route.get("/btech", (req, res) => {
    res.send("BTech Department");
});

module.exports = route;