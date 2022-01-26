const http = require('http')
const moment = require('moment')

let visitas = 0
const server = http.createServer((req, res) => {

  visitas++
  const horaStr = moment().format("HH")
  const hora = Number(horaStr)

  if (req.url === "/") {
    if (hora > 6 && hora < 12) {
        res.write("Buenos Dias")
    }

    else if (hora > 13 && hora < 19) {
        res.write("Buenos Tardes")
    }
    else{
        res.write("Buenas noches!")
    }

    // /visitas
    // /api/courses
    // /user

    res.end()
}
})

console.log(process.env)
const PORT = process.env.PORT || 8080
server.listen(PORT)

console.log(`escuchando en el puerto ${PORT}`)
