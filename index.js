const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.json())


// Gerbang Utama menyalakan API, Url HTTP://localhost:3000 👇👇
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/product', (req, res) => {
  console.log(req.body)
  res.send('testing')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})