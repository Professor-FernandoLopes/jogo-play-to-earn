const express = require('express')
//const path = require('path')
const http = require('http')
const cors = require('cors')

// SERVER CONFIG
const PORT = process.env.PORT || 3000
const app = express();
const server = http.createServer(app).listen(PORT, () => console.log(`Listening on ${PORT}\n`))

app.use(express.static('public'));

app.use(cors({ credentials: true, origin: '*' }))