const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const routes = require('../routes/routes')
const port = process.env.PORT || 4000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', routes)

const server_on = app.listen(port, (err) => {
	if (err) throw err
	console.log(`Server on port ${port}`)
})

module.exports = server_on