const express = require("express")

const route = express.Router()


route.get("/",(req,res) => {
    res.send("Hello from the shop ");
});
route.get("/Computer",(req,res) => {
    res.send("Hello from the computer shop ");
});

module.exports = route