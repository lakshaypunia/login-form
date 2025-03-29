import { Router } from "express";
import { register } from "../controllers/controller";

const router = Router();

router.post("/register", register);

export default router;
