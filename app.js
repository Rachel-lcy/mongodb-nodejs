const express = require('express')

//init app &middleware
const app = express();
const port = 3000;

app.listen(port, ()=>{
  console.log('app listening on port 3000')
})

//routes
app.get('/books', (req, res) => {
  res.json({message: "welcome to the api"})
})