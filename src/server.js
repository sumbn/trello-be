import express from 'express'

const app = express()
const hostname= 'localhost'
const port = 1111

app.get('/', function (req, res) {
  res.send('<h1>Hello summer</h1>')
})

app.listen(port, hostname, () => {
  console.log(`Hello Summer, server is running at http://${hostname}:${port}`)
})