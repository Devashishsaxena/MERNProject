import express from 'express';
const router = express.Router();

//import controller
import * as UserController from '../controller/User.controller.js';

router.post("/save", UserController.save);

router.get("/fetch", UserController.fetch);

router.delete("/delete", UserController.deleteUser);

router.patch("/update", UserController.updateUser);
export default router;