const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('Hello World');
})

app.get("/goodbye", (req, res)=>{
  res.send('Goodbye world')
})

app.get("/pancake", (req, res)=> {
  res.send('Yes you can have a pancake')
})

app.listen(port, () => {
  console.log(`Listening to https://127.0.0.1:${port}`);
})