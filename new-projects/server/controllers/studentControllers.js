const mysql = require("mysql");

const con = mysql.createPool({
    connectionLimit:10,
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
});


exports.view=(req,res) =>{

    con.getConnection((err,Connection)=>{
        if(err) throw err
        Connection.query("select * from users",(err,rows) =>{
            Connection.release();
            if(!err){
                res.render("home",{rows});
            }else{
                console.log("Error in Listing Data" +err);
            }
        });
    });
    
};
exports.adduser = (req,res) =>{
    res.render("adduser");
}