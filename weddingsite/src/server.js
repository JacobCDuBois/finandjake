

const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 3001;




const db = mysql.createConnection({
    host: 'db-mysql-nyc3-60839-do-user-17563879-0.k.db.ondigitalocean.com',
    user: 'doadmin',
    password: 'AVNS_mcWc4O8StWQynvkvtcD',
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
app.post('/submit-quiz', (req, res) => {
    const { quiz_score, name } = req.body;

    const query = 'INSERT INTO quiz_score (quiz_score, name) VALUES (?, ?)';
    db.query(query, [quiz_score, name], (err, result) => {
        if (err) {
            console.error('Error inserting quiz score:', err);
            return res.status(500).send('Error inserting quiz score');
        }
        res.send('Quiz score submitted successfully!');
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
    const name = req.body.name.toLowerCase();
    console.log(name);

    const query = 'SELECT * FROM stanfordHouse WHERE name like ?';
    db.query(query, [name], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred while querying the database.');
        }

        if (results.length > 0) {
            // Safely check results[0]['invited']
            res.json({ invite: results[0]['invited'] });
        } else {
            // No rows found, set invite to false by default
            res.json({ invite: false });
        }
        console.log(results);
    });
});
app.post('/add-entry', (req, res) => {
    const {name, invite, diet, notes,  coming, stanford, timestamp } = req.body;
    console.log(req.body);
    const id = uuidv4();
    // Construct SQL query to insert new entry
    // Use backticks around `index` to avoid conflicts with reserved words
    const query = `
        INSERT INTO rsvpList (id, name, invite, diet, notes, coming, stanford, timestamp)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    console.log(query);

    // Execute the query
    db.query(query, [id, name, invite, diet, notes, coming, stanford, timestamp], (err, result) => {
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
