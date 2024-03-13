import { Router } from "express";
import { getBlogs } from "../controllers/blog.controller.js";
import { authenticate } from "../middleware/auth.js";

const router = Router();

router.route('/allBlogs').get(authenticate, getBlogs)


export default router