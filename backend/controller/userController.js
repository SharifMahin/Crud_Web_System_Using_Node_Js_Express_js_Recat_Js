const userModel = require('../model/userSchema.js');
const mongoose = require("mongoose");

//Create User data
const create = async (req, res) => {
    try{
        const userData = new userModel(req.body);
        if(!userData){
            return res.status(404).json({message: "Input data empty"});
        }else{
           const saveData = await userData.save();
           return res.status(200).json({message: "User Created Succesfully"});
        }
    }catch(error){
        return res.status(500).json({erroe: error});
    }   
}


//fetch All data
const fetchAllUser = async (req, res) => {
   try{
        const existData = await userModel.find();
        if(existData==''){
            return res.status(404).json({message: "No data available"});
        }else{
           return res.status(200).json(existData);
        }
    }catch(error){
       return res.status(500).json({error: "There was a server side error!"});
   }   
}

//fetch one data
const fetchUser = async (req, res) => {
    try{
        const retriveOne = await userModel.findById(req.params.id);
         if(retriveOne){
             //return res.status(404).json({message: "No data available"});
             return res.status(200).json(retriveOne);
          }else{
            return res.status(404).json({message: "User data not available"});
          }
     }catch(error){
        return res.status(502).json({error: "There was a server side error!"});
    }   
 }

//Update data
const updateUser = async (req, res) => {
    try{
        const existData = await userModel.findById(req.params.id);
         if(!existData){
            return res.status(404).json({message: "User data not available"});
          }
        const updatedData = await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true}); //{new:true} store the updated value
        return res.status(200).json(updatedData);
     }catch(error){
        return res.status(502).json({error: "There was a server side error!"});
    }   
 }

//Delete data
const deleteUser = async (req, res) => {
    try{
        const existData = await userModel.findById(req.params.id);
         if(!existData){
            return res.status(404).json({message: "User data not available"});
          }
        const deletedData = await userModel.findByIdAndDelete(req.params.id);
        return res.status(200).json({message: "User Deleted Successfully"});
     }catch(error){
        return res.status(502).json({error: "There was a server side error!"});
    }   
 }

module.exports = {create,fetchAllUser,fetchUser,updateUser,deleteUser};