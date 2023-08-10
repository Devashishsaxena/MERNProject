import express from 'express';
const router = express.Router();

//import controller
import * as BussinessController from '../controller/Bussiness.controller.js'; 

router.post("/save",BussinessController.save);

router.get("/fetch",BussinessController.fetch);

router.delete("/delete",BussinessController.deleteBussiness);

router.patch("/update",BussinessController.updateBussiness);

router.post("/login",BussinessController.login);

export default router;