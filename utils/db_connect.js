const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

//get json results from allure
//get meaningful data saved somewhere
//connect db and turn the dat into sql query
//db connection and insert of allureResultsDBFormatted
//check db manually if has data

//automatically download last 10 days results
