const express = require('express');
const bodyPraser = require('body-parser');
const { urlencoded } = require('body-parser');
const mid = express();

mid.use(bodyPraser.urlencoded({extended:false}));

mid.use('/purchase',function(req, res, next){
  
    res.send('<form action="/adds" method="POST"><input type="text" name = "title"><button type="submit">click</button></form>');
});

mid.use('/adds',function(req, res, next){
   
    console.log(req.body);
    res.redirect('/');
});


mid.use('/',function(req, res, next){
   
     res.send("<h1>I am understanding the concept</h1>");
    
 });

mid.listen(3000);