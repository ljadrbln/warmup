var test = require('tape');
const sqlite3 = require('sqlite3').verbose();

test('db test', function (t) {
    
    const db = new sqlite3.Database('test.db', (err) => {
        if(err) {
            console.error(err.message);
        }
        console.log('Connected to test.db');
    });
    
    let values = [];
    
    function getCnt( callback ) {
        db.get('SELECT COUNT(*) as cnt from table1', (err, row) => {
            if(err) {
                console.log(err);
            } else {
                //numberOfRecords = row.cnt;
                callback(row.cnt);
                //console.log('numberOfRecords', row.cnt);
            }
        });
        
    }
    
    function checkCnt(value) {
        values.push(value);
        
        if(2 == values.length) {
            console.log(values);
            t.equal(values[0] + 1, values[1]);
            t.end();
        }
    }
    
    db.serialize( () => {
        getCnt( checkCnt );
        
        db.run(`INSERT INTO table1(fname, lname) VALUES('User', 'Test')`, (err) => {
            if(err) {
                console.log(err);
            }
        });
        
        getCnt( checkCnt );
        
        db.close( (err) => {
            if(err) {
                console.error(err.message);
            }
            
            console.log('Close test.db connection')        
        }); 
    });
});