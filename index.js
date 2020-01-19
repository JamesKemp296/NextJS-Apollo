const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('💾  DB connected'))
  .catch(err => console.error(err))

const PORT = process.env.PORT || 6000
app.listen(PORT, () =>
  console.log(`🚀  Server ready at http://localhost:${PORT}`)
)
