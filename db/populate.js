#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');

const pool = require('./pool');

(async () => {
    await pool.query(
        fs.readFileSync(path.join(__dirname, 'schema', 'CREATE_items.sql'), 'utf8')
    );
    await pool.query(
        fs.readFileSync(path.join(__dirname, 'schema', 'FILL_items.sql'), 'utf8')
    );
    await pool.end();
})()