import mongoose, { Schema } from "mongoose";
import { genSalt, hash } from 'bcrypt'
const addressSchema = mongoose.Schema({
    owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    
  },
  { timestamps: true }
);

const UserAddress = mongoose.model("Useaddress", addressSchema);
export default UserAddress;