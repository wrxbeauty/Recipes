// Dependencies
require('dotenv').config()
const express = require('express');
const app = express();

// Controllers
app.use('/recipes', require('./controllers/recipes'))

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.status(404).send(`
        <body>
            <h1 style="text-align: center">404 page</h1>
        </body>
    `)
})

app.listen(process.env.PRT)