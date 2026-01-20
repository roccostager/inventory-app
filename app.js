#!/usr/bin/env node

const express = require('express');
const app = express();
const port = 3000;

const path = require('node:path');
const { getAllItems, insertItem } = require('./db/query');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.render('index', { items: await getAllItems() });
})

app.listen(port, error => {
    if (error) {
        throw error;
    }
    console.log(`Server listening on port ${port}`);
});