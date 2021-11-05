const express = require("express")

const app = express()

app.get("/", (req, res) => {
  // res.status(200).send("Deploy changes test").end()
  res.send("Breadchyk is a great guy")
})

// Start the server
const PORT = 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})

module.exports = app
