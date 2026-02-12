import exp from 'express'
import { ProductModel } from '../Models/ProductModel.js'
export const prodRoute =exp.Router()


//route to  reate new product
prodRoute.post("/product",async(req,res)=>{
    let newprod =req.body;
    let newProdDoc = new ProductModel(newprod)
    await newProdDoc.save()
    res.status(200).json({message:"new product created successfully"})
})