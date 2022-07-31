const express = require('express')
var router = express.Router()

const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const url = `mongodb+srv://snow:${process.env.MONGODB_PASS}@blog.xtkdtqa.mongodb.net/?retryWrites=true&w=majority`

MongoClient.connect(url, function(err, client) {
	if (err) {
		return console.log(err)
	}

	db = client.db('blog')
	blogCollection = db.collection(process.env.NODE_DB)
	console.log(`[server] @ ${(new Date()).toLocaleString()} - MongoDB : Successfully conected`)
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


/**
 * Getting the posts
 * @name get/db/addPosts
 * @function
 * @memberof:routers/dbHandler
 * @returns {array} An array of all the json posts
 */
 router.get('/addPosts', (req, res) => {
	const {title, content, hidden, pinned, tags, author, description, image} = req.body

	const post = {
		title:title,
		content:content,
		hidden:hidden,
		pinned:pinned,
		tags:tags,
		author:author,
		description:description,
		image:image
	}

	blogCollection.insertOne(post)
})


module.exports = router
