import mongoose, { Schema } from "mongoose";
import { genSalt, hash } from "bcrypt";
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
    orders:[
      {
       product_name:String,
       price:String,
       image:String,
       orderedAt:{
        type:Date,
        default:Date.now
       },
      }
    ]
   
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  next();
});
const User = mongoose.model("Users", userSchema);
export default User;
