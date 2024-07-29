const mongoose = require('mongoose')

const uri = process.env.MONGODB_URI;

const mongoDb = mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log('Connected to atlas'))
	.catch((err) => console.log(`Error: ${err}`))



module.exports = mongoDb
