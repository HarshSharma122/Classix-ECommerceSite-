import { compare } from "bcrypt";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
const maxAge = 3 * 24 * 60 * 60 * 1000;
const createToken = (email, userId)=>
{
    return jwt.sign({email, userId}, "harsh1234290", {
        expiresIn:maxAge,
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
    return res.status(200).json({
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(501).send("server error");
  }
};
