const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config()

app.get('/',(req,res)=>{
    res.send('Server running...')
})

app.get('/notes/api',(req,res)=>{
    res.json('notes/api')
})

app.get('/notes/api/:id',(req,res)=>{
    const {id} = req.params
    res.json(`/notes/api/${id}`)
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running in port ${process.env.PORT}`)
})
