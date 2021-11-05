const express = require("express")
const path = require("path")

const app = express()

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "/view/index.html"))
  res.send("Breadchyk is a great guy with lots of opportunities")
})

const PORT = 8000
app.listen(PORT, _ => {
  console.log(`App listening on port ${PORT}`)
})
