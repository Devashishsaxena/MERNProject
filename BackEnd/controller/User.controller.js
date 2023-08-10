import '../models/connection.js';
import UserSchemaModel from '../models/User.model.js';
import url from 'url';

export const save = async (req, res) => {
    var UserList = await UserSchemaModel.find().sort({ "_id": -1 });
    var _id = (UserList.length == 0 ? 1 : UserList[0]._id + 1);
    var UserDetails = { ...req.body, "_id": _id, "role": "User", "status": 0, "info": Date() };
    var User = await UserSchemaModel.create(UserDetails);
    if (User)
        res.status(201).json({ "status": true });
    else
        res.status(500).json({ "status": false });
}

export const fetch = async (req, res) => {
    var condition_object = url.parse(req.url, true).query;
    var UserList = await UserSchemaModel.find(condition_object);
    if (UserList.length != 0)
        res.status(201).json(UserList);
    else
        res.status(500).json({ "result": "Server Error" });
}

export const deleteUser = async (req, res) => {
    var condition_obj = JSON.parse(req.body.condition_obj);
    var User = await UserSchemaModel.find(condition_obj);
    if (User.length != 0) {
        let result = await UserSchemaModel.deleteOne(condition_obj);
        if (result)
            res.status(201).json({ "msg": "record deleted successfully...." });
        else
            res.status(500).json({ error: "Server Error" });
    }
    else
        res.status(404).json({ error: "Resource not found" });
}

export const updateUser = async (req, res) => {
    let UserDetails = await UserSchemaModel.findOne(JSON.parse(req.body.condition_obj));
    if (UserDetails) {
        let User = await UserSchemaModel.updateOne(JSON.parse(req.body.condition_obj), { $set: JSON.parse(req.body.content_obj) });
        if (User)
            res.status(201).json({ "msg": "record updated successfully" });
        else
            res.status(500).json({ error: "Server Error" });
    }
    else
        res.status(404).json({ error: "Requested resource not available" });
}

