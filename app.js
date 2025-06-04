const mysql = require("mysql2");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const http = require("http");
const app = express();
const server = http.Server(app);
const port = 5500;
//var connection = require("./database")
app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req,res,)
{
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.post('/post', function (req,res,)
{
    console.log(req.body);
    var fname = req.body.firstName;
    var lname = req.body.lastName;
    var mail = req.body.email;
    var num = req.body.number;
    var guest = req.body.guests;
    var night = req.body.nights;
    
    var sql = "INSERT INTO guests(firstName, lastName, email, number, guest, nights) VALUES?";
    var values =
    [
        [fname,lname,mail,num,guest,night]
    ];
    connection.query(sql,[values], function(error)
    {
        if(error) throw error;
        console.log("Guest Has Been Added");
    });
});

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "@p1atform_1022",
        database: "test"
    }
);

connection.connect((err) =>
{
    if(err)
    {
        throw err;
    }
    console.log("MySQL Database Connected");
});
server.listen(port, function()
{
    console.log(`Server Has Started On Port :${port}`)
})
