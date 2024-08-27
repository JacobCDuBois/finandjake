
let dotenv = require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;


console.log(dotenv)
const password = process.env.DB_PASSWORD
console.log(process.env)
const host = process.env.DB_HOST

const db = mysql.createConnection({
    host: '',
    user: 'doadmin',
    password: '',
    database: 'defaultdb',
    port: 25060
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database');
});

app.use(cors());
app.use(bodyParser.json());

app.post('/check-list', (req, res) => {

    const inputText = req['body'].name.toLowerCase();


// Use LIKE for partial matching and add wildcards
    const query = 'SELECT * FROM guestList WHERE LOWER(name) LIKE ?';
    const searchPattern = `%${inputText}%`;
    db.query(query, [searchPattern], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while querying the database.');
        } else {
            res.json({ exists: results });
        }
    });
});
app.post('/get-invite', (req, res) => {

    const invite = req.body.inviteValue;


// Use an exact match for integer values
    const query = 'SELECT * FROM guestList WHERE invite = ?';

// No need for a search pattern since invite is an integer
    db.query(query, [invite], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while querying the database.');
        } else {
            res.json({ exists: results });
        }
    });
});
app.post('/get-stanford', (req, res) => {

    const name = req['body'].name.toLowerCase();
    console.log(name);

// Use an exact match for integer values
    const query = 'SELECT * FROM stanfordHouse WHERE name like ?';
    console.log(query)
// No need for a search pattern since invite is an integer
    db.query(query, [name], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while querying the database.');
        } else {
            console.log(results)
            res.json({ invite: results[0]['invited'] });
        }
        console.log(results)
    });
});
app.post('/add-entry', (req, res) => {
    const { index, name, invite, diet, notes,  coming, stanford, timestamp } = req.body;
    console.log(req.body);

    // Construct SQL query to insert new entry
    // Use backticks around `index` to avoid conflicts with reserved words
    const query = `
        INSERT INTO rsvpList (\`index\`, name, invite, diet, notes, coming, stanford, timestamp)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    console.log(query);

    // Execute the query
    db.query(query, [index, name, invite, diet, notes, coming, stanford, timestamp], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('An error occurred while adding the entry.');
            return;
        }
        res.status(201).send('Entry added successfully.');
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
