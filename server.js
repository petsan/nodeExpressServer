'use strict'

const express = require('express')
const app = express()


//this lib gets variables from .env
require('dotenv').config();

//find public
app.use(express.static('./public'));

const PORT = process.env.PORT;

// replaced by app.use ^^
// app.get('/', function (req, res) {
//   res.send('hi World')
// })

// app.get('/bananas', (req, res) => {
//   res.send('bananas in pajamas')
// })

app.listen(PORT), () =>  {
  console.log(' listening on ${PORT}');
}