import { Schema,model } from "mongoose";
const productSchema =new Schema({
    productName:{
        type:String,
        required:[true,"productname is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"]
    },
    brand:{
        type:String,
        required:[true,"brand name is requirde"]
    }
},{strict:"throw",
timestamps:true,
versionKey:false
})
//create model 
export const ProductModel =model("product",productSchema)