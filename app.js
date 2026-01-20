#!/usr/bin/env node

const express = require('express');
const app = express();
const port = 3000;

const path = require('node:path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Hello, world!');
})

app.listen(port, error => {
    if (error) {
        throw error;
    }
    console.log(`Server listening on port ${port}`);
});