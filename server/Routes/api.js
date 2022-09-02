const express = require('express');
const router = express.Router();
const User = require('../models/user')


// database connection 1st, require mongoose
const mongoose = require('mongoose')
//then declare the connection string to the Db
const db = ('mongodb+srv://UserYan:UserYan@yan0.hftl4ay.mongodb.net/test')
// then connect to db: takes the db string
mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err)
    }else{
        console.log('Connect to MongoDb')
    }
})



// test a get request
router.get('/', (req, res) => {
    res.send('From api routes');
})


//registration Api
router.post('/register', (req, res) => {
// 1st  exract user information from the request body
    let userData = req.body;
//convert it (userFata) into a model(user) that mongoDb can undderstand - so we require user model on the 3rd line above
    let user = new User(userData);
//then save the user to db
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser);
        }
    })
});


router.post('/login', (req, res) => {
    let userData = req.body;  //ectract user information form the request body and store in userData variable
    //check if username exists in the database or not

    ///query the db with the username
    User.findOne({username: userData.username},(error, user) => {  //first argument is a condition(where username is whatever is typed on loin screen) next is a callback that has two arguments! 1st is an error, next is the user that matched the condition
        if (error) {
            console.log('error')
        }else {
            if (!user) { //check if the user exists with that username
                res.status(401).send('Invalid username')
            }else{
                if (user.password !== userData.password) {   // if we find the username then, check if password matches user that
                    res.status(401).send('Invalid password')
                }else{                  
                        res.status(200).send(user)          //return the user details
                    }
            }
        }
    })
     


})


module.exports = router;