const express = require('express')
var router = express.Router()

const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const url = 'mongodb://localhost:27017'

MongoClient.connect(url, function(err, client) {
	if (err) {
		return console.log(err)
	}

	db = client.db('blog')
	blogCollection = db.collection('posts')
	console.log(`[server] @ ${(new Date()).toLocaleString()} - MongoDB : Successfully conected to ${url}`)
})


/**
 * Verifies that the to be inserted post is safe, and inserting date
 * @param {json} the blog with title, content and stuff
 * @returns result code
 */
function checkPost(data) {
	function checkString(e) {
		if (typeof e !== 'string' || !(e instanceof String) || e.length !== 0) {
			return false
		} else {
			return true
		}
	}

	function checkTags(e) {
		arrayBool = e.map(tag => checkString(tag))
		return !arrayBool.includes(false)
	}

	if (checkString(data.title) && checkString(data.content) && checkString(data.author) && checkTags(data.tags) ) {
		return true
	} else {
		return false
	}

}

/**
 * Getting the posts
 * @name get/db/getPosts
 * @function
 * @memberof:routers/dbHandler
 * @returns {array} An array of all the json posts
 */
router.get('/getPosts', (req, res) => {
	blogCollection.find({}).toArray((err, data) => {
		res.json(data)})
})

/**
 * Getting post with given id
 * @name get/db/getUniquePost
 * @function
 * @memberof:routers/dbHandler
 * @param {hex number} the id
 * @returns {object} the json of the post
 */
router.get('/getUniquePost', (req, res) => {
	var filterObjectId = new ObjectID.createFromHexString(req.query.id.toString())
	blogCollection.find({ _id: filterObjectId}).toArray((err, data) => {
		if (err) {
			return}
		res.json(data)})
})


module.exports = router