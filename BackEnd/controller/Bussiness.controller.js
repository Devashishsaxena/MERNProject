import '../models/connection.js';
import BussinessSchemaModel from '../models/Bussiness.model.js';
import url from 'url';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import { sendMail } from "./Email.Controller.js";

export const save=async (req,res)=>{
  var BussinessList=await BussinessSchemaModel.find().sort({"_id":-1});
  var _id=(BussinessList.length==0?1:BussinessList[0]._id+1);
  var BussinessDetails = { ...req.body, "_id": _id, "role": "Bussiness", "status": 1, "info": Date() };
  var Bussiness=await BussinessSchemaModel.create(BussinessDetails);
  if (Bussiness) {
    sendMail(Bussiness.email,Bussiness.password)
    res.status(201).json({"status":true});
  }
  else
   res.status(500).json({"status": false});
}

export const fetch=async (req,res)=>{
  var condition_object=url.parse(req.url,true).query;
  var BussinessList = await BussinessSchemaModel.find(condition_object);
  if(BussinessList.length!=0)
    res.status(201).json(BussinessList);
  else
    res.status(500).json({"result": "Server Error"});
}

export const deleteBussiness=async(req,res)=>{
  var condition_obj=JSON.parse(req.body.condition_obj);          
  var Bussiness = await BussinessSchemaModel.find(condition_obj);
  if(Bussiness.length!=0){
    let result = await BussinessSchemaModel.deleteOne(condition_obj); 
    if(result)
     res.status(201).json({"msg":"record deleted successfully...."});
    else
     res.status(500).json({error: "Server Error"});
  }
  else
    res.status(404).json({error: "Resource not found"}); 
}

export const updateBussiness=async(req,res)=>{
  let BussinessDetails = await BussinessSchemaModel.findOne((req.body.condition_obj));
  if(BussinessDetails){
     let Bussiness=await BussinessSchemaModel.updateOne((req.body.condition_obj),{$set: (req.body.content_obj)});   
     if(Bussiness)
      res.status(201).json({"msg":"record updated successfully"});
     else
      res.status(500).json({error: "Server Error"});
  }
  else
   res.status(404).json({error: "Requested resource not available"});
}

export const login=async (req,res)=>{
  var BussinessDetails=req.body;
  BussinessDetails={...BussinessDetails,"status":1};
  var BussinessList = await BussinessSchemaModel.find(BussinessDetails);
  if(BussinessList.length!=0)
  {
    let payload={"subject":BussinessList[0].email};
    let key=rs.generate();
    let token=jwt.sign(payload,key);
    res.status(201).json({"token":token,"BussinessDetails":BussinessList[0]});
  }
  else
    res.status(500).json({"token": "error"});
}

