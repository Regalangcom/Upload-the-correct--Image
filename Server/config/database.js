import db  from  "mysql2"
import dotenv from "dotenv";
dotenv.config()


const connectionDb = db.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
})

connectionDb.connect( function( err ) {
    if (err) {
        console.log("Error in connection pak!");
    } else {
        console.log("database connect pak!");
    }
 })


 export default connectionDb 


