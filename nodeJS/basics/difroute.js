const express = require('express');
const mid = express();

mid.use('/',function(req, res, next){
  
    console.log("page is runnng");
    next();
});


mid.use('/adds',function(req, res, next){
   
     console.log("another page is runnng");
     res.send("<h1>I am understanding the concept</h1>");
     next();
 });

 
mid.use('/',function(req, res, next){
    
     console.log("last page is runnng");
     next();
 });


mid.listen(3000);