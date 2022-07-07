import { Router } from "express";
import { getfranchise, getallfranchise } from "../controllers/index.controller";
//import { getallfranchise } from "../controllers/franchise.controller";
const router = Router();


// router.get('/users', getUsers);
router.get('/franchise', getfranchise);
router.get('/allfranchise', getallfranchise);
export default router;