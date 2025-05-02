import mongoose from "mongoose";
import { genSalt, hash } from 'bcrypt'
const userSchema = mongoose.Schema({
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
    password: {
      type: String,
      required: [true, "Password is Required"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function(next)
{
    const salt = await genSalt();
    this.password = await hash(this.password, salt);
    next();
})
export default User = mongoose.model("Users", userSchema);