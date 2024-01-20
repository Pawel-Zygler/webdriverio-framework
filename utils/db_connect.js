#!/usr/bin/env node

import { mysql } from "mysql";

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((error) => {
  if (error) {
    console.error("Błąd połączenia: " + error.stack);
    return;
  }

  console.log("Połączono jako ID " + connection.threadId);

  connection.query("SELECT * FROM pawelzyg_salvemundus", (error, results) => {
    if (error) throw error;
    console.log(results);
  });

  connection.end();
});

//get json results from allure
//get meaningful data saved somewhere
//connect db and turn the dat into sql query
//no chyba mam mysqlsh na kompie, ale komenda

// MySQL  JS > \connect pawelzyg@192.168.0.1:59652
// Creating a session to 'pawelzyg@192.168.0.1:59652'
// Please provide the password for 'pawelzyg@192.168.0.1:59652':
// MySQL Error 2003 (HY000): Can't connect to MySQL server on '192.168.0.1:59652' (60)
// cos nie chce sie podlaczyc do bazy

//db connection and insert of allureResultsDBFormatted
//check db manually if has data

//automatically download last 10 days results
//https://panel.freehosting.com:2222/evo/user/database
