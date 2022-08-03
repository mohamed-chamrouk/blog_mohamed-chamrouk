const express = require('express')
var router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")

const MongoClient = require('mongodb').MongoClient
const url = `mongodb+srv://snow:${process.env.MONGODB_PASS}@blog.xtkdtqa.mongodb.net/?retryWrites=true&w=majority`

MongoClient.connect(url, function (err, client) {
    if (err) {
        return console.log(err)
    }

    db = client.db('blog')
    usersCollection = db.collection('users')
    console.log(`[server] @ ${(new Date()).toLocaleString()} - MongoDB : Successfully conected`)
})

router.post("/register", (request, response) => {
    console.log(request.body)
    // hash the password
    if (request.body.key === process.env.SECRET_KEY) {
        bcrypt
            .hash(request.body.password, 10)
            .then((hashedPassword) => {
                // create a new user instance and collect the data
                usersCollection.insertOne({
                    username: request.body.username,
                    password: hashedPassword,
                    fullName: request.body.fullName
                })
                response.send('Done')
            })
            // catch error if the password hash isn't successful
            .catch((e) => {
                response.status(500).send({
                    message: "Password was not hashed successfully",
                    e,
                });
            });
    }
});

router.post("/login", (request, response) => {
    // check if email exists
    console.log(request)
    usersCollection.findOne({ username: request.body.username })

        // if email exists
        .then((user) => {
            // compare the password entered and the hashed password found
            bcrypt
                .compare(request.body.password, user.password)

                // if the passwords match
                .then((passwordCheck) => {

                    // check if password matches
                    if (!passwordCheck) {
                        return response.status(400).send({
                            message: "Passwords does not match",
                            error,
                        });
                    }

                    //   create JWT token
                    const token = jwt.sign(
                        {
                            userId: user._id,
                            userEmail: user.email,
                        },
                        "RANDOM-TOKEN",
                        { expiresIn: "24h" }
                    );

                    //   return success response
                    response.status(200).send({
                        message: "Login Successful",
                        email: user.email,
                        token,
                    });
                })
                // catch error if password does not match
                .catch((error) => {
                    response.status(400).send({
                        message: "Passwords does not match",
                        error,
                    });
                });
        })
        // catch error if email does not exist
        .catch((e) => {
            response.status(404).send({
                message: "user not found",
                e,
            });
        });
});

module.exports = router
