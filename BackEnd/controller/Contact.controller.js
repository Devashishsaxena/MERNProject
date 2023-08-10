import '../models/connection.js';
import ContactSchemaModel from '../models/Contact.model.js';
import url from 'url';

export const save = async (req, res) => {
    var ContactList = await ContactSchemaModel.find().sort({ "_id": -1 });
    var _id = (ContactList.length == 0 ? 1 : ContactList[0]._id + 1);
    var ContactDetails = { ...req.body, "_id": _id, "role": "Contact", "status": 0, "info": Date() };
    var Contact = await ContactSchemaModel.create(ContactDetails);
    console.log(">>",req.body);
    if (Contact)
        res.status(201).json({ "status": true });
    else
        res.status(500).json({ "status": false });
}

export const fetch = async (req, res) => {
    var condition_object = url.parse(req.url, true).query;
    var ContactList = await ContactSchemaModel.find(condition_object);
    if (ContactList.length != 0)
        res.status(201).json(ContactList);
    else
        res.status(500).json({ "result": "Server Error" });
}

export const deleteContact = async (req, res) => {
    var condition_obj = JSON.parse(req.body.condition_obj);
    var Contact = await ContactSchemaModel.find(condition_obj);
    if (Contact.length != 0) {
        let result = await ContactSchemaModel.deleteMany(condition_obj);
        if (result)
            res.status(201).json({ "msg": "record deleted successfully...." });
        else
            res.status(500).json({ error: "Server Error" });
    }
    else
        res.status(404).json({ error: "Resource not found" });
}

export const updateContact = async (req, res) => {
    let ContactDetails = await ContactSchemaModel.findOne(JSON.parse(req.body.condition_obj));
    if (ContactDetails) {
        let Contact = await ContactSchemaModel.updateOne(JSON.parse(req.body.condition_obj), { $set: JSON.parse(req.body.content_obj) });
        if (Contact)
            res.status(201).json({ "msg": "record updated successfully" });
        else
            res.status(500).json({ error: "Server Error" });
    }
    else
        res.status(404).json({ error: "Requested resource not available" });
}

