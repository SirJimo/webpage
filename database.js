var mysql = require(mysql2);
var connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "@p1atform_1022",
        database: "test"
    }
);
module.exports = connection;