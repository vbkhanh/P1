const express = require('express');
const dotenv = require('dotenv');



const app = express();
dotenv.config();

const port = process.env.PORT || 8088;

app.get('/', (req, res) => {
  res.send('Someone Else');
})


app.get('/motherfucker', (req, res) => {
  res.send("I am your MOTHERFUCKER!!!!");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})