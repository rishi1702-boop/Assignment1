import {Schema, model} from 'mongoose';
const userSchema = new Schema({
    username:{
        type: String,
        required: [true, 'Username is required'],
        minLength: [3, 'Username must be at least 3 characters long'],
        maxLength: [30, 'Username cannot exceed 30 characters']
    },
    password:{ 
        type: String,
        required: [true, 'Email is required']
    },
    age:{
        type: Number,
        min: [0, 'Age cannot be negative'],
        max: [120, 'Age seems unrealistic']
    }   
}, {timestamps: true});
export const UserModel = model('User', userSchema);