const express = require('express')
const app = express()
const db = require('./db')()
const bodyParser = require('body-parser')
const port = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('Welcome to your cats db!')
})

app.post('/cats', function(req, res) {
  let newCat = db.add(req.body)
  res.send(newCat)
})

app.get('/cats/:id', function(req, res) {
  let id = req.params.id
  res.send(db.get(id))
})

app.put('/cats/:id', function(req, res) {
  let id = req.params.id
  res.send(db.update(id, req.body))
})

app.delete('/cats/:id/', function(req, res) {
  let id = req.params.id
  try {
     res.status(204).send(db.delete(id))
  } catch(err) {
    res.status(400).send(err)
  }
})

app.listen(port, function() {
  console.log(`Server listening on port ${port}`)
})
