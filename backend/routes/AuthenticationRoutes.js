import { Router } from "express";
import { getUserInfo, login, signup, getuserAddress, DeleteToken } from "../controllers/authenticationController.js";
import { verifyToken } from "../middlewares/AuthMiddleWare.js";


const authenticationRoutes = Router();

authenticationRoutes.post("/signup", signup);
authenticationRoutes.post("/login", login);
authenticationRoutes.post('/userAddress',verifyToken, getuserAddress);
authenticationRoutes.get('/userInfo', verifyToken, getUserInfo);
authenticationRoutes.post('/deletetoken' ,DeleteToken)

export default authenticationRoutes;