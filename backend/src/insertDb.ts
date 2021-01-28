import {createConnection} from "typeorm";
import {Table1} from "./entities/model1.entity";

createConnection().then( async connection => {
    let promise = new Promise(function(resolve, reject) {
        setTimeout( () => resolve('done'), 1000);
    });
    
    console.log('Start saving...');
    promise.then(
        async result => {
            const u1 = new Table1();
            u1.fname ='John';
            u1.lname = 'Smith';
            
            await connection.manager.save(u1);
            
            console.log('User has been saved', u1);
        }
    );
    
}).catch(error => console.log("Error: ", error) );