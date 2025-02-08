const express = require('express');
const router = express.Router();

const Person = require('../models/person');



//post method to post the data
router.post('/',async (req,res)=>{
    try{
      const data = req.body;
  
    const newPerson= new Person(data);
    const response =await newPerson.save();
    console.log("Data saved successfully");
    res.status(200).json(response);
  
    }catch(error){
      console.log("Error: "+ error);
      res.status(500).json({error: 'internal server error'});
    }
  })



  //get method to get all person details
  router.get('/', async (req,res)=>{
    try{
      const data = await Person.find();
      console.log("data fetched successfully!");
      res.status(200).json(data);
  
    }catch(error){
      console.log("error occured: "+error);
      res.status(500).json({error: 'Unable to fetch! '});
  
    }
  })
  
  
  //URL parser
  router.get('/:workType',async (req,res)=>{
    try{
      const workType = req.params.workType; //extract parameter like /menu/waiter
      if (workType == 'chef'|| workType == 'manager'|| workType=='waiter'){
        console.log("Fetched!");
        const response = await Person.find({work: workType});
        res.status(200).json(response);
      }else{
        res.status(404).json({error: "Invalid !"});
      }
  
    }catch(error){
      console.log("error occured: "+error);
      res.status(500).json({error: 'Unable to fetch! '});
  
    }
  })


//PUT (UPDATE) method

router.put('/:id',async (req,res)=>{
    try{
        const personid = req.params.id; //id extract kela url madhun
        const updatePersonData = req.body;  //data ghetla change karayala

        const response = await Person.findByIdAndUpdate(personid, updatePersonData,{
            new: true,
            runValidators: true,

        })
        if(!response){                                              //jar id not exist asel tar
            res.send(404).json({error: "Person not found!"});
        }

        res.status(200).json(response);
        console.log("Data updated successfully!");

    }catch(error){
        res.status(500).json({error: "internal erroe!"});
        console.log("Error in updating!");

    }
})


//delete
router.delete('/:id',async (req,res)=>{
    try{
        const personid = req.params.id;
    const response = await Person.findByIdAndDelete(personid);

    if(!response){
        res.status(404).json({erroe: "person id not exist!"});
    }

    res.status(200).send("successfully removed!");

    }catch(error){
        res.status(500).json({error: "internal server error!"});
    }
    
})




module.exports = router;