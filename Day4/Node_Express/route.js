const express = require("express")

const router = express.Router()


router.get("/", (req, res) => {
    res.send("Shop /");
})
router.get("/product1", (req, res) => {
    res.send("This is product 1");
})

module.exports = router