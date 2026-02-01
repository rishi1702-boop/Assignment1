import exp from "express";
import { ProductModel } from "../models/ProductModel.js";
export const productApp = exp.Router();
// GET all products
productApp.get("/products", async (req, res) => {
    let products = await ProductModel.find()
    res.status(200).json({message:"all users",payload:products})
}
);
//create product
productApp.post("/products",async(req,res)=>{
    let newProd=req.body;
    let newProdDoc =new ProductModel(newProd);
    console.log(newProdDoc)
    await newProdDoc.save()
    res.status(200).json({message:"product created successful"})
})
//read product by objectID
productApp.get("/products/:id",async(req,res)=>{
    //get objectId from url param
    let objId=req.params.id;
    //findproduct in DB
    let prodObj=await ProductModel.findById(objId)
    //send res
    res.status(200).json({message:"product fetched successfully",payload:prodObj})
})
//update product
productApp.put("/products/:id",async(req,res)=>{
    let objId=req.params.id;
    let modifiedProd=req.body
    await ProductModel.findByIdAndUpdate(objId,{$set:{...modifiedProd}},{new:true ,runValidators:true})
    res.status(200).json({message:"product modified successfully",payload:modifiedProd})
}
)
//delete product
productApp.delete('/products/:id',async(req,res)=>{
    let objId=req.params.id;
    //delete product in db
    let deletedProd=await ProductModel.findByIdAndDelete(objId)
    //send req
    res.status(201).json({message:"product deleted succesfully",payload:deletedProd})
})