const express = require('express');
const router = express.Router();

const MenuItem = require('../models/menu');


//post method for menu schema
router.post('/', async(req,res)=>{
    try{
      const data = req.body;
      const newMenu = new MenuItem(data);
      const response = await newMenu.save();
      res.status(200).json(response);
  
  
    }catch(error){
      console.log("Error: "+error);
      res.status(500).json({error: "Internal error"});
  
    }
  })
  
  //get method for menu schema
  router.get('/', async (req,res)=>{
    try{
      const data = await MenuItem.find();
      console.log("data fetched successfully!");
      res.status(200).json(data);
  
    }catch(error){
      console.log("error occured: "+error);
      res.status(500).json({error: 'Unable to fetch! '});
  
    }
  })

  //parameterized
  router.get('/:taste', async(req,res)=>{
    try{
        const taste = req.params.taste;
        if(taste == 'spicy' || taste == 'sour' || taste == 'sweet'){
            const data= await MenuItem.find({taste: taste});
            console.log("data fetched!");
            res.status(200).json(data);
        }else{
            res.status(500).json({error: "Invalid taste!"});
        }

    }catch(error){
        res.status(500).json({error: "Internal error!"});
        console.log("Error in fetching !");
    }
  })

  //update (put)
  router.put('/:id',async(req,res)=>{
    try{
        const menuid = req.params.id;
        const data = req.body;
        const response = await MenuItem.findByIdAndUpdate(menuid, data ,{
            new: true,
            runValidators: true,
        });
        if(!response){
            res.status(404).json({error: "not found!"});
        }

        res.status(200).json(response);


    }catch(error){

        res.status(500).json({error: "Internal server error!"});
    }
  })


  //delete
  router.delete('/:id',async (req,res)=>{
    try{
        const menuid = req.params.id;
        const response = await MenuItem.findByIdAndDelete(menuid);

        if(!response){
            res.status(404).json({error: "Menuid not found!"});
        }

        res.status(200).send("Menu removed!");

    }catch(error){
        res.status(500).json({error: "Internal server erroe!"});
    }
  })


  module.exports= router;