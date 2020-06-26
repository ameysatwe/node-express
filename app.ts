import express=require('express');
const app:express.Application=express();
var cust:{id:number,name:string,address:string}[]=
    [{id:1,name:"Amey Satwe",
    address:"Karad",
    }]
app.set('view engine','hbs')
app.get('/',function(req,res){
    res.send('Welcome to home page');
});
app.get('/amey',function(req,res){
    res.send(func.util.name+" Says Hello");
})
app.get('/testcust',function(req,res){
    res.render('customer',cust)
    //res.send(cust);
})
app.get('/cust',function(req,res){
    res.send(cust)

})
app.get('/api/testcust',function(req,res){
    res.send({cust:cust})
    //res.send(cust);
})
app.get('/api/custbyid/:id?',function(req,res){
    console.log(req.params.id)
    res.send("id : "+req.params.id)
    //res.send(cust);
})
app.get('/api/addcustomer',function(req,res){
    console.log(req.query.name,req.query.address)
    if(!req.query.name){
    res.render("addcustomer")
    }
    else{
        cust.push({id:+req.query.id,name:req.query.name.toString(),address:req.query.Address.toString()})
        res.send(cust)
    }//res.send(cust)
    //res.send(cust);
})


const port=3000;
app.listen(port,function(){
    console.log("Server started on port"+port+" ");
});
// import fs=require('fs')
// fs.writeFileSync("New.txt","Trying Something new")
// fs.appendFileSync("New.txt","\nStarted Server at 3000")
// try{
//     fs.appendFileSync("a.txt","appends")
    
// }
// catch(err){
//     fs.writeFileSync("a.txt","new file")
// }

import func=require('./new_app')
// console.log(func.util.name)
// let c=func.util.add(10,20)
// console.log(c)
//var line=new func.util.Line(30,50)
//line.display()


import validator=require('validator')
import { number } from 'yargs';
import { error } from 'console';
import { idText } from 'typescript';
console.log("validator here"+validator.default.isEmail("amey@gmail.com"))