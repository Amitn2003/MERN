const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is post 0");
})
router.get("/post1", (req, res) => {
    console.log("Hello")
    res.send("This is post 1");
})

router.get("/post2", (req, res) => {
    res.send("This is post 2");
})

module.exports = router;