// Dependencies
require('dotenv').config()
const express = require('express');
const app = express();


// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(process.env.PRT)