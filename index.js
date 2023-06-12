// Dependencies
require('dotenv').config();
const express = require('express');
const app = express();

// Views
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// Controllers
app.use('/recipes', require('./controllers/recipes'));

// Routes
app.get('/', (req, res) => {
    res.render('home')  // Homepage view
});

app.get('*', (req, res) => {
    res.status(404).send(`
        <body>
            <h1 style="text-align: center">404 page</h1>
        </body>
    `)
});

// Listen
app.listen(process.env.PRT);