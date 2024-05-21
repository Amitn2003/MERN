const exp = require("express");
const route = exp.Router();

route.get("/", (req, res) => {
    res.send("All colleges are there...");
});

route.get("/seacom", (req, res) => {
    res.send("Seacom Management College");
});

route.get("/techno", (req, res) => {
    res.send("Techno Main Salt Lake");
});

module.exports = route;