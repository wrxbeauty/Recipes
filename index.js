// Dependencies
require('dotenv').config()
const express = require('express');
const app = express();


// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 page</h1>')
})

app.listen(process.env.PRT)