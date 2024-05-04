const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Here you get Dresses... ")
})
router.get("/shirt", (req, res) => {
    res.send("Here you get Shirts... ")
})
router.get("/tshirt", (req, res) => {
    res.send("Here you get T-Shirts... ")
})
router.get("/pant", (req, res) => {
    res.send("Here you get Pant... ")
})
module.exports = router