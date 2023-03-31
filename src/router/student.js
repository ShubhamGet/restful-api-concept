const express=require("express");
//Step1: create a new router
const router =new express.Router();

const Student=require("../models/students");

// create a new students using async
router.post("/students",async(req,res)=>{
    try {
        const user=new Student(req.body);
        const createUser= await user.save();
        res.status(201).send(createUser); 
    } catch (error) { res.status(400).send(error);}
})

// read the data of registered students
router.get("/students",async(req,res)=>{
    try {
      const studentsData= await Student.find();
      res.send(studentsData)
    } catch (error) {
        res.send(error);
    }
})

//get the individual students data using id

router.get("/students/:id",async(req,res)=>{
    try {
        const id=req.params.id;
        const studentsData=await Student.findById(id);
        console.log(studentsData);
        if(!studentsData){
           return res.status(404).send();
        }else{
            res.send(studentsData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})
//get the individual students data using name

router.get("/students/:name",async(req,res)=>{
    try {
        const name=req.params.name;
        const studentsData=await Student.findByName(name);
        console.log(studentsData);
        if(!studentsData){
           return res.status(404).send();
        }else{
            res.send(studentsData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
})

// update the students by its id

router.patch("/students/:id",async(req,res)=>{
    try {
        const _id=req.params.id;
        const updateStudents= await Student.findByIdAndUpdate(_id,req.body);
        res.send(updateStudents);
    } catch (error) {
        res.status(400).send(updateStudents);
    }
})

module.exports=router;