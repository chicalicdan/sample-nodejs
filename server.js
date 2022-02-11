// server.js

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Test AWS CodePipeline')
})

app.listen(3000, () => {
    console.log('Test AWS CodePipeline')
})
