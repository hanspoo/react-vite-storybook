const express = require('express')
const app = express()
const port = 3000

app.get('/v1/me', (req, res) => {
  res.send({ id:1, name:"Juan Pérez"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

