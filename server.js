// server.js

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Test AWS CodePipeline deploy')
})

app.listen(3000, () => {
    console.log('Test AWS CodePipeline deploy')
})
