const express = require('express')
const port = process.env.PORT || 8690
const server = express()

server.get('/',(req,res) =>{
res.send('my name is suhaib ')
})



    server.listen(port)
