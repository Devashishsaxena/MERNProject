import express from 'express';
const router = express.Router();

//import controller
import * as ContactController from '../controller/Contact.controller.js';

router.post("/save", ContactController.save);

router.get("/fetch", ContactController.fetch);

router.delete("/delete", ContactController.deleteContact);

router.patch("/update", ContactController.updateContact);
export default router;