const sqlite3 = require('sqlite3').verbose();
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const db = new sqlite3.Database('test.db', (err) => {
    if(err) {
        console.error(err.message);
    }
    console.log('Connected to test.db');
});

db.serialize( () => {
    db.run('CREATE TABLE IF NOT EXISTS table1 (fname text, lname text)', (err) => {
        if(err) {
            console.log(err);
            throw err;
        }
    });
    
    db.each('SELECT COUNT(*) as cnt from table1', (err, row) => {
        if(err) {
            console.log(err);
            throw err;
        }
        console.log("Number of users in DB:", row.cnt);
    }, () => {
        console.log('query completed')
    });
    
    db.close( (err) => {
        if(err) {
            console.error(err.message);
        }
        
        console.log('Close test.db connection')        
    }); 
});

app.use( cors({origin: 'http://localhost:8000'}) )

app.post('/', (req, res) => {
    let a = [1, {a: 2}, "b"];
    res.json(a);
})

app.listen(port, () => {
    console.log(`Listening port ${port}`)
})