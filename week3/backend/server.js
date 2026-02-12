//creater http server
import exp from 'express';
import { userApp } from './API/user-API.js';
import { productApp } from './API/product-API.js';
import{connect} from 'mongoose';
const app=exp();
//create database connection
async function connectdb() {
    try {
        await connect('mongodb://localhost:27017/anuragdb4')
        console.log("DB connection success")
        // Start server
        app.listen(4000, () => console.log("HTTP server listening on port 4000"));
    } catch (err) {
        console.log("error in db connection",err)
    }
}
connectdb();
app.use(exp.json());
app.use('/user-api',userApp);
app.use('/product-api',productApp);