const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema =  new schema({
    name: String,
    email: String,
    phone: String,
    userId: String
})

const userModel =  mongoose.model('users', userSchema)
module.exports = router

router.post('/adduser', (req, res) => {
    const newuser = new userModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        userId: req.body.userId
    })
    newuser.save(function(err){
        if(!err){
            res.send("User added correctly")
        }else{
            res.send(err)
        }
    })
})

router.get('/getuser', (req, res) => {
    userModel.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

router.post('/getdatauser', (req, res) => {
    userModel.find({userId:req.body.userId}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

router.post('/updateuser', (req, res) => {
    userModel.findOneAndUpdate({userId:req.body.userId}, {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
    }, (err) => {
        if(!err){
            res.send('User updated successfuly')
        }else{
            res.send(err)
        }
    })
})

router.post('/deleteauser', (req, res) => {
    userModel.findOneAndDelete({userId:req.body.userId}, (err) => { 
        if(!err){
            res.send('User deleted successfuly')
        }else{
            res.send(err)
        }
    })
})