import exp from "express";
import { UserModel } from "../models/UserModel.js";// include .js extension

export const userApp = exp.Router();

// GET all users
userApp.get("/users", async (req, res) => {
  let users=await UserModel.find()
  res.status(200).json({message:"all users",payload:users})
});
// create user
userApp.post("/users",async(req,res)=>{
  let newUser=req.body;
  let newUserDoc = new UserModel(newUser)
  console.log(newUserDoc)
  await newUserDoc.save()
  res.status(200).json({message:"user created successful"})
})


//read user by objectID
userApp.get("/users/:id",async(req,res)=>{
  //get objectId from url param
  let objId=req.params.id;
  //finduser in DB
  let userObj=await UserModel.findById(objId)
  //send res
  res.status(200).json({message:"user fetched successfully",payload:userObj})
})

//update user
userApp.put("/users/:id",async(req,res)=>{
  let objId=req.params.id;
  let modifiedUser=req.body
  await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true ,runValidators:true})
  res.status(200).json({message:"user modified successfully",payload:modifiedUser})
})

//delete user
userApp.delete('/users/:id',async(req,res)=>{
  let objId=req.params.id;
  //delete user in db
  let deletedUser=await UserModel.findByIdAndDelete(objId)
  //send req
  res.status(201).json({message:"user deleted succesfully",payload:deletedUser})
})