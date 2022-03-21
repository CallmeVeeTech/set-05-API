
const express = require('express')
const port = process.env.PORT || 2022

const app = express()

app.get('/', (req,res)=>{
    res.send('My api is ready for consumption')
})

app.listen(port, ()=>{
    console.log(`server is listening to ${port}`)
})
