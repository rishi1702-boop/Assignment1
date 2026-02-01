import {Schema,model} from 'mongoose';
//create product schema
const productSchema = new Schema({
    productname:{
        type:String,
        required:[true,"productname is requird"],
        minLength:[4,"minimum length should be 4"],
        maxLength:[6,"max length should be 6"]
    },
    pid:{
        type:Number,
        required:[true,"pid is required"]
    },price:{
        type:Number,
        required:[true,"price is required"]

    }
})
export const ProductModel=model("products",productSchema);