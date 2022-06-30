const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req,res) => {
    res.status(200).json({
        message:"Here is the landing page"
    })
})

server.get('/api/users', (req,res) => {
    res.status(200).json({
        message:"Here is the list of users"
    })
})

server.post('/api/register', (req,res) => {
    req.body = user
    res.status(201).json(user)
})

server.post('/api/login', (req,res) => {
    res.status(200).json({
        message: "Welcome"
    })
})


module.exports = server;