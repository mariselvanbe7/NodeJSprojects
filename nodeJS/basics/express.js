const { application } = require('express');
const express = require('express');

const app = express();

const port = 4000;

app.get('/',function(req, res){
    res.send('hello world');
})

app.listen(port,function(){
    console.log('web loading')
})