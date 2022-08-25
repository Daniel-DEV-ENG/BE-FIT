const express = require('express');

const router = express.Router();
const Sequelize =require('sequelize');
const Op=Sequelize.Op;

const Diet =require('../model/Diet');
const Exercise =require('../model/Exercise');
const Food =require('../model/food');
const Supplement =require('../model/Supplement');
const workout =require('../model/workout');

const array=[];
DietSearch.apply(this, array);

 async function DietSearch (req,res)
{  

 const searchedField=req.query.data;
await Diet.findAll({where :{description:{[Op.like]: '%'+searchedField+'%'}}}).then(data=>{

  if(data)
  {
 array.push(data);
 return array;
  }

  }).catch(error=>{
   // console.error(error);
  })

}


ExerciseSearch.apply(this, array);
  async function ExerciseSearch (req,res)
  {  
   
    const searchedField=req.query.data;
    
    await Exercise.findAll({where :{ 	email:{[Op.like]: '%'+searchedField+'%'}  }}).then(data=>{
     
      if(data){
     array.push(data);
    
     return array;
      }
      
    
      }).catch(error=>{
       // console.error(error);
      })
  
    }


    
FoodSearch.apply(this, array);
async function FoodSearch (req,res)
{  
 
  const searchedField=req.query.data;
  
  await Food.findAll({where :{ 	email:{[Op.like]: '%'+searchedField+'%'}  }}).then(data=>{
   
    if(data){
   array.push(data);
  
   return array;
    }
    
  
    }).catch(error=>{
     // console.error(error);
    })

  }




  SupplementSearch.apply(this, array);
  async function SupplementSearch (req,res)
  {  
   
    const searchedField=req.query.data;
    
    await Supplement.findAll({where :{ 	email:{[Op.like]: '%'+searchedField+'%'}  }}).then(data=>{
     
      if(data){
     array.push(data);
    
     return array;
      }
      
    
      }).catch(error=>{
       // console.error(error);
      })
  
    }

    
workoutSearch.apply(this, array);
async function workoutSearch (req,res)
{  
 
  const searchedField=req.query.data;
  
  await workout.findAll({where :{ 	email:{[Op.like]: '%'+searchedField+'%'}  }}).then(data=>{
   
    if(data){
   array.push(data);
  
   return array;
    }
    
  
    }).catch(error=>{
     // console.error(error);
    })

  }
router.get('/search',  (req, res) => {
  workoutSearch(req,res);
  SupplementSearch(req,res);
  FoodSearch(req,res);
  ExerciseSearch(req,res);
  DietSearch(req,res);


if(array){
res.send(array);

}
if(array.length ===0 )
{
  res.send("sorry we did not found your search");
}
while(array.length>0)
{
  array.pop();
}


  });

  module.exports = router;