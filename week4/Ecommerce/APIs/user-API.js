import exp from 'express';
import { hash,compare } from 'bcrypt';
import { UserModel } from '../Models/UserModel.js';
import { ProductModel } from '../Models/ProductModel.js'

export const userRoute = exp.Router()

//create new  user
userRoute.post("/users",async(req,res)=>{
    let newUser = req.body
    //run validator
    await new UserModel(newUser).validate
    let hashedpassword = await hash(newUser.password,12)
    newUser.password= hashedpassword
    let newUserDoc =new UserModel(newUser)
    await newUserDoc.save()
    res.status(200).json({message:"user created succesfull "})
})

/*userRoute.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>{
    //read uid and pid from url parameters
    let {uid,pid} = req.params;//{uid:"",pid:""}
    //check user
    let user =await UserModel.findById(uid)
    if(!user){
        return res.status(401).json({message:"user invalid"})
    }
    //check product
    let product =await ProductModel.findById(pid)
    if(!product){
        return res.status(401).json({message:"product invalid"})
    }
    //perform update
    let modifiedUser=await UserModel.findByIdAndUpdate(
        uid,
        {$push:{cart:{product:pid}}
        },
        {new:true}
    )
})*/
userRoute.put("/user-cart/user-id/:uid/product-id/:pid",async(req,res)=>{
    const { uid, pid } = req.params;

    // check user
    const user = await UserModel.findById(uid);
    if (!user) {
    return res.status(404).json({ message: "Invalid user" });
    }

    // check product
    const product = await ProductModel.findById(pid);
    if (!product) {
    return res.status(404).json({ message: "Invalid product" });
    }

    // try to increment quantity if product already exists in cart
    let modifiedUser = await UserModel.findOneAndUpdate(
    { _id: uid, "cart.product": pid },
    { $inc: { "cart.$.quantity": 1 } },
    { new: true }
    );

    // if product not in cart, push new entry with quantity = 1
    if (!modifiedUser) {
    modifiedUser = await UserModel.findByIdAndUpdate(
        uid,
        { $push: { cart: { product: pid, quantity: 1 } } },
        { new: true }
    );
    }

    res.status(200).json({
    message: "Cart updated successfully",
    payload: modifiedUser
    });
})
userRoute.get("/users/:uid",async(req,res)=>{
    let objId=req.params.uid;
  //finduser in DB
    let userObj=await UserModel.findById(objId).populate("cart.product")
    res.status(200).json({message:"user fetched successfully",payload:userObj})
})

userRoute.get("/compare/:pid",async(req,res)=>{
    let productId =req.params.pid
    let prod = await ProductModel.findById(productId)
    //co,pares ids
    if(productId==prod.id){
        console.log("equal")
    }else{
        console.log("not equal")
    }
})