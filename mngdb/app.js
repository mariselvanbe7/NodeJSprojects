const express = require('express');
const exhbs = require('express-handlebars');
const mongodb = require('mongodb');
const bodypraser = require('body-parser');

const app = express();

let db = null

const MongoClient = mongodb.MongoClient;

const dbString = 'mongodb+srv://maribe:maribe@cluster0.j0nmzkw.mongodb.net/user?retryWrites=true&w=majority'
const dbName = 'user'

MongoClient.connect(dbString,{useNewUrlParser:true,useUnifiedTopology:true},(err,client) => {
    if(err){
       throw(err)
    }

    db = client.db(dbName)
   
})

app.use(bodypraser.urlencoded({extended:true}));
app.use(bodypraser.json());

app.use(express.static("public"));

const handlebars = exhbs.create({extname:"hbs"});
app.engine('hbs',handlebars.engine);
app.set("view engine", "hbs");


app.use(routes = require("./server/rout/route"));
app.use('/',routes);

/*
app.post('/adduser',(req,res) => {
    db.collection('inform').insertOne({Name:req.body.name,Age:req.body.age,City:req.body.city},(req,res) =>{
        
    })
})
*/

    
app.listen(4000);
