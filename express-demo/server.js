const moment = require('moment')
const express = require('express')
const app = express()

const Contenedor = require("./contenedor.js")

const clase = new Contenedor()

app.get("/", (req, res) => {
  res.send('<h1 style="color: green">Hola</h1>')
})

app.get("/api/cursos", (req, res) => {
  res.send(JSON.stringify([1, 2, 3, 4]))
})

app.get('/fyi', (req, res) => {
  res.send(moment().format("HH:mm:ss DD/MM/YYYY"))
})


const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`)
})

server.on("error", (err) => {
  console.log(`Error: ${err}`)
})