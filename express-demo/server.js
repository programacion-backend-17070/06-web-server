const express = require('express')
const app = express();

// route
app.get("/", (req, res) => {
    res.send("Hello")
})

app.get("/api/courses", (req, res) => {
    res.send(JSON.stringify([1, 2, 3]))
})

app.listen(8080, () => console.log("escuchando en puerto 8080"))