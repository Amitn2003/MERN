const express = require("express")
const app = express()
const PORT = 8000;

app.use("/admin", require("./routes"))

app.get("", (req, res) => {
    res.send("Hello From HOME PAGE");
});

app.get("/about", (req, res) => {
    res.send("Hello From ABOUT PAGE");
});

app.listen(PORT, ()=> console.log(`Server is listening on PORT ${PORT} http://127.0.0.1:${PORT}`))
