import { compare } from "bcrypt";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (email, userId) => {
  return jwt.sign({ email, userId }, "harsh1234290", {
    expiresIn: maxAge,
  });
};

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send("Name, email and password is required");
    }
    const user = await User.create({ username, email, password });
    res.cookie("token", createToken(email, user._id), {
      maxAge,
      secure: true,
    });
    return res.status(201).json({
      user: {
        username: user.username,
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).send("server error");
  }
};
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(402).send("Email and password is required");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("No user found");
    }

    const checkuser = await compare(password, user.password);
    if (!checkuser) {
      res.status(400).send("Username and password is Incorect");
    }
    res.cookie("token", createToken(email, user._id), {
      maxAge,
      secure: true,
    });
    return res.status(202).json({
      user: {
        username: user.username,
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(501).send("server error");
  }
};

export const getuserAddress = async (req, res, next) => {
  try {
    const { address, number, city, pincode, country } = req.body;
    if (!address || !number || !city || !pincode || !country) {
      return res
        .status(400)
        .send("address, number, city, pincode, country is required");
    }
    const userId = req.userId;
    const updateduser = await User.findByIdAndUpdate(
      userId,
      {
        address,
        number,
        city,
        pincode,
        country,
      },
      { new: true }
    );
    if (!updateduser) {
      return res.status(404).send("User not found");
    }

    return res.status(202).json({
      updateduser: {
        id: updateduser._id,
        address: updateduser.address,
        number: updateduser.number,
        city: updateduser.city,
        pincode: updateduser.pincode,
        country: updateduser.country,
      },
    });
  } catch (error) {
    return res.status(500).send("server error");
  }
};

export const getUserInfo = async (req, res, next) => {
  try {
    const userData = await User.findById(req.userId);

    if (!userData) {
      return res.status(400).send("User with the given id is not found");
    }

    return res.status(202).json({
      username: userData.username,
      id: userData._id,
      email: userData.email,
      address: userData.address,
      number: userData.number,
      city: userData.city,
      pincode: userData.pincode,
      country: userData.country,
    });
  } catch (error) {
    return res.status(501).send("server error");
  }
};

export const DeleteToken = async (req,res, next)=>
{
  try{
    res.cookie("token", "", {maxAge:1, secure:true, sameSite:"none"})
    return res.status(200).send("logout succeesfull");

  }catch(error)
{
  return res.status(500).send("Internals server eoror");
}
}