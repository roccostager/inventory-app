#!/usr/bin/env node

const express = require('express');
const app = express();
const port = 3000;

const path = require('node:path');
const { getAllItems, insertItem } = require('./db/query');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    res.render('index', { items: await getAllItems() });
})

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'add.html'));
})
app.post('/add', async (req, res) => {
    await insertItem({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
    });
    res.redirect('/');
})

app.listen(port, error => {
    if (error) {
        throw error;
    }
    console.log(`Server listening on port ${port}`);
});