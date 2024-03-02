const express = require('express')
const app = express() 

// GET
app.get("/", (req, res) => {
  res.send("hola mundo")
})

app.listen(3000, () => {
  console.log("listen on 3000");
})

app.post()