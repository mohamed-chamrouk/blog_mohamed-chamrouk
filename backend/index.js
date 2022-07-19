const express = require('express')
const port = 4000
const cors = require('cors')
const dbHandler = require('./routers/dbHandler.js')

const app = express()

app.use(cors())
app.use('/db', dbHandler)

/**
 * Starting point of the server
 * @function
 */
app.get('/', (req, res) => {
	res.send('Hello WOrld!')
})

app.listen(port, () => {
	console.log(`[Server] : Server is running at http://localhost:${port}`)
})

