const express = require('express')
const path = require('path')
const cors = require('cors')

const port = 4000
const dbHandler = require('./routers/dbHandler.js')

const app = express()

app.use(cors())
app.use('/api/db', dbHandler)

app.use(express.static("../frontend/build"))

/**
 * Starting point of the server
 * @function
 */
app.get('/api', (req, res) => {
	res.send('Hello WOrld!')
})

app.listen(port, () => {
	console.log(`[Server] : Server is running at http://localhost:${port}`)
})

