import { Router } from "express";
import { loginUser, registerUser, logoutUser } from "../controllers/user.controller.js";
import {authenticate} from "../middleware/auth.js";
const router = Router();

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').post(authenticate, logoutUser)


export default router