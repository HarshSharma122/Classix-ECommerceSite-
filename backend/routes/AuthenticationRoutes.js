import { Router } from "express";
import { login, signup } from "../controllers/authenticationController.js";


const authenticationRoutes = Router();

authenticationRoutes.post("/signup", signup);
authenticationRoutes.post("/login", login);


export default authenticationRoutes;