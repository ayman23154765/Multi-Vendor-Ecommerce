import { Router } from "express";
import { postSignup, postSignin } from "../controllers";

const router = Router();

router.post('/signin', postSignin);
router.post('/signup', postSignup);

export default router;