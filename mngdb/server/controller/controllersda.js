const mongodb = require('mongodb');
const { Connection } = require('mongodb/lib/core');



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





exports.view = (req,res) => {
    res.render("home");
}

exports.datas = (req,res) => {
    res.render("datas");
}

exports.adduser = (req,res) => {
    
    res.render("adduser");
}

exports.save = (req,res) => {
    const {name,age,city} =req.body;
    Connection.post('/datas',(req,res) => {
        db.collection('inform').insertOne({Name:req.body.name,Age:req.body.age,City:req.body.city},(req,res) =>{
            
        })
    })
    
}
