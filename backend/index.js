const express = require('express')
const path = require('path')
const cors = require('cors')

const port = 4000
const dbHandler = require('./routers/dbHandler.js')
const loginHandler = require('./routers/loginHandler.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use('/api/db', dbHandler)
app.use('/api', loginHandler)

app.use(express.static("../frontend/build"))

app.use('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../', 'frontend', 'build', 'index.html'));
});

/**
 * Endpoint for testing purposes
 * @function
 */
app.get('/api', (req, res) => {
	res.send('Hello WOrld!')
})

app.listen(port, () => {
	console.log(`[Server] : Server is running at http://localhost:${port}`)
})

