var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "intern_test"
});

connection.connect(function(error) {
    if (error) throw error;

    let createSoilTable = "CREATE TABLE IF NOT EXISTS soil ("
        + "id int NOT NULL AUTO_INCREMENT, "
        + "date DATE NOT NULL, "
        + "time TIME NOT NULL, "
        + "temp int NOT NULL, "
        + "ph float NOT NULL, "
        + "moisture int NOT NULL, "
        + "PRIMARY KEY (id)"
        + ");"
    
    connection.query(createSoilTable, function(error, results, fields) {
        if (error) {
            console.log(error);
        }
    });
});

module.exports = connection;