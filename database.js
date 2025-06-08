const mysql = require("mysql2");
const express = require("express");
const path = require("path");
const http = require("http");
const port = 5000;
const nodemailer = require("nodemailer");

const app = express();
const server = http.Server(app);

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/")));

app.get("/", function(req,res)
{
    res.sendFile(path.join(__dirname, "index.html"))
})
app.post('/', function(req,res,)
{
    console.log(req.body);
    const fname = req.body.firstName;
    const lname = req.body.lastName;
    const mail = req.body.email;
    const num = req.body.number;
    const guest = req.body.guests;
    const night = req.body.nights;
    
    const sql = "INSERT INTO guests(firstName, lastName, email, number, guest, nights) VALUES?";
    const values =
    [
        [fname,lname,mail,num,guest,night]
    ];
    connection.query(sql,[values], function(error)
    {
        if(error) throw error;
        console.log("Guest Has Been Added");
    });
    const transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: 
            {
                user: 'jimodemowmow@gmail.com',
                pass: 'ejpgnjmxgryliutc'
            }
        }
    );
    const mailOptions = 
    {
        from: "V&A",
        to: mail,
        subject: "Booking Confirmation",
        text: "This is email is regarding your booking at V&A backpackers"
    };
    transporter.sendMail(mailOptions, function(err, info)
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("Email Sent: " + info.response)
        }
        res.redirect("/")
    })
})


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