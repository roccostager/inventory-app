#!/usr/bin/env node

const { Pool } = require('pg');

module.exports = new Pool({
    user: process.env.DB_USER,
    host: 'localhost',
    database: 'inventory',
    password: process.env.DB_PASSWORD,
    port: 5432
});