const express = require("express")
const app = express()
const PORT = 8000;

const sh = require("./route")
app.use("/shop", sh);


app.get("/", (req, res) => {
    res.send("Hello from home");
})
app.get("/about", (req, res) => {
    res.send("Hello from About uS");
})

app.listen(PORT, ()=> {
    console.log(`App is listening on port ${PORT} http://127.0.0.1:${PORT}`)
})