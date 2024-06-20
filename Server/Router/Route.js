import { Router } from "express";
import { Upload } from "../Controllers/controller.js";
const router = Router();

router.post("/upload" ,  Upload);

export default router;
