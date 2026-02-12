//create http server 
import exp from 'express';
import { connect } from 'mongoose';
import { prodRoute } from './APIs/product-API.js';
import { userRoute } from './APIs/user-API.js';

const app = exp()
//connect to mongodb
async function ecommercedb() {
    try {
        await connect('mongodb://localhost:27017/ecommerse')
        console.log("DB connection success")
        // Start server
        app.listen(4000, () => console.log("HTTP server listening on port 4000"));
    } catch (err) {
        console.log("error in db connection",err)
    }
}
ecommercedb()

//use body parser middleware
app.use(exp.json())

////forward re to specific api
app.use("/products-api",prodRoute)
app.use("/users-api",userRoute)


//error handling middleware
function errHandler(err,req,res,next){
    res.json({message:"error",reason:err.message})
}
app.use(errHandler)
