'use strict'

const express = require('express')
const app = express()


//this lib gets variables from .env
require('dotenv').config();

//find public
app.use(express.static('./public'));

const PORT = process.env.PORT || 3001;

// replaced by app.use ^^
// app.get('/', function (req, res) {
//   res.send('hi World')
// })

app.get('/bananas', (req, res) => {
  res.status(200).send('bananas in pajamas')
})

app.get('*', (request, response) => {
  response.status(404).send('sorry this route does not exist');
})

app.listen(PORT), () =>  {
  console.log(' listening on ${PORT}');
}