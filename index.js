const connection = require("./connection")

const express = require("express");

const port = 5001;

const bodyparser = require("body-parser")

let app = express();

app.use(bodyparser.json());

app.post("/addcompany",(req,res)=>{
    let postdata = req.body
    connection.query("INSERT INTO company SET ?",postdata,function(err,result,field){
        if(err){
            res.send("Error",err.sqlMessage)
        }else{
            res.send(result)
        }
        res.end()
    })
});

app.get("/displaycompany",(req,res)=>{
    let getdata = req.body
})


app.listen(port,function(err){
    if(err){
        console.log(err.sqlMessage)
    }else{
        console.log(`server runnng on port $(port)`)
    }
})

