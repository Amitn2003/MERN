const express = require("express")

const app = express()
const PORT = 8000
const sh = require("./route")

app.use("/shop", sh)

app.get("/" , (req, res) => [
    res.send("Hello home pageeeeeeeeeee")
])
app.listen(PORT , ()=> {
    console.log(`Listening to port ${PORT} http://127.0.0.1:${PORT} `)
})