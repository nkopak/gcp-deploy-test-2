"use strict"

// [START gae_node_request_example]
const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res
    .status(200)
    .send("Breadchyk is a great guy with lots of opportunities")
    .end()
})

// Start the server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log("Press Ctrl+C to quit.")
})
// [END gae_node_request_example]

module.exports = app
