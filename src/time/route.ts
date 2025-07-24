import { Router } from "express";
import { getTime } from "./time.controller";

const router = Router();

router.get("/time", getTime);

export default router;