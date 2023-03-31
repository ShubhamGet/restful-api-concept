const express=require("express");
require("./db/con");
const Student=require("./models/students");
const studentRouter=require("./router/student");

const app=express();
const port=process.env.PORT || 8000;

app.use(express.json())

app.use(studentRouter);

// create a new students using the promises concept
/*
app.post("/students",(req,res)=>{
    console.log(req)
    const user=new Student(req.body);
    
    user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
})
*/

// to listen the port number 
app.listen(port,()=>{
    console.log(`Connection successful.... at ${port}`);
})




