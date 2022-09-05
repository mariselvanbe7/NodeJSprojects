const express = require("express");
const exhbs = require("express-handlebars");
const bodypraser = require("body-parser");
const mysql = require("mysql");
const Connection = require("mysql/lib/Connection");

require('dotenv').config();

const app = express();
const port = 5000;

app.use(bodypraser.urlencoded({extended:false}));
app.use(bodypraser.json());

app.use(express.static("public"));

const handlebars = exhbs.create({extname:".hbs"});
app.engine('hbs', handlebars.engine);
app.set("view engine", "hbs");

/*
const con = mysql.createPool({
    connectionLimit:10,
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});

con.getConnection((err,Connection)=>{
    if(err) throw err
    console.log("connection succes");
})

*/

const routes = require("./server/routes/student");
app.use('/',routes);


app.listen(port,() => {
    console.log("Listen port" + port);
});