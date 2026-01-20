#!/usr/bin/env node

const pool = require('./pool');

async function getAllItems() {
    const {rows} = await pool.query('SELECT * FROM items;');
    return rows;
}

async function insertItem({ name, description, category }) {
    await pool.query(
        'INSERT INTO items (name, description, category) VALUES ($1, $2, $3);',
        [name, description, category]
    );
}

module.exports = {
    getAllItems,
    insertItem,
};