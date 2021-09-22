const mysql= require('./db');
const express=require('express');
const bodyParser = require("body-parser");
const app=express();

// parse requests of contenttype: application/json
app.use(bodyParser.json());

// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));
// simple route
app.get("/", (req, res) => {
res.json({ message: "Welcome to web course example application." });
});

//get contact 
app.get("/contact",function(req,res){
    sql.query("select * from contact",(err,mysqlres)=>{
        if (err) {
            console.log("error: ", err);
            res.status(400).send({message: "error in getting all contact: " + err});return;
            }
            console.log("got all contact...");
            res.send(mysqlres);
            return;
            });
            });


// set port, listen for requests
app.listen(3306, () => {
console.log("Server is running on port 3000."
);
});

