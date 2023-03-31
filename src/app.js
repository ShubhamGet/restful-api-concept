const express=require("express")
require("./db/con")
const Student=require("./models/students")

const app=express();
const port=process.env.PORT || 8000;

app.use(express.json())

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

// create a new students using async
app.post("/students",async(req,res)=>{
    try {
        const user=new Student(req.body);
        const createUser= await user.save();
        res.status(201).send(createUser); 
    } catch (error) { res.status(400).send(error);}
})

app.listen(port,()=>{
    console.log(`Connection successful.... at ${port}`);
})
