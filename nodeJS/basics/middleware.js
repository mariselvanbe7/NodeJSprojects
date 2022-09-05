const express = require('express');
const mid = express();
const alert = express('alert');

mid.use(function(req, res, next){
   alert("welcome");
    console.log("page is runnng");
    next();
});

mid.get('/',function(req, res, next){
    console.log('page loading!!');
    res.send("I am understanding the concept");
});

mid.listen(3000);