import pg from "pg";
import env from "dotenv";

env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});


db.connect(
    err => {
      if(err){
        console.error(err);
      }
      else{
        console.log("Connected to database.");
        
      }
    }
);


export default db;
