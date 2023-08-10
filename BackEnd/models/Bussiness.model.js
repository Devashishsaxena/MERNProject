import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const BussinessSchema = mongoose.Schema({
  _id: Number,
  fname: {
    type: String,
    required: [true,"First Name is required"],
    lowercase: true,
    trim: true
  },
  middle: {
    type: String,
    lowercase: true,
    trim: true,
  },
  lname: {
    type: String,
    required: [true,"Last Name is required"],
    lowercase: true,
    trim: true,
  },
  cname: {
    type: String,
    required: [true,"Company Name is required"],
    lowercase: true,
    trim: true,
  },
  wname: {
    type: String,
    required: [true,"Website Name is required"],
    lowercase: true,
    trim: true,
  },

  email: {
    type: String,
    required: [true,"Email Id is required"],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true,"Password is required"],
    maxlength: 10,
    minlength:5,
    trim: true
  },
  code: {
    type: String,
    required: [true,"Country Code is required"],
    minlength:2,
    trim: true
  },
  mobile: {
    type: String,
    required: [true,"Mobile is required"],
    maxlength: 10,
    minlength: 10,
    trim: true
  },
  pincode: {
    type: String,
    required: [true, "Pincode is required"],
    trim: true
  },
  flat_no: {
    type: String,
    required: [true, "Flat No is required"],
    trim: true
  },
  address: {
    type: String,
    required: [true,"Address is required"],
    trim: true
  },
  land_mark: {
    type: String,
    required: [true,"Land Mark is required"],
    trim: true
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  country: {
    type: String,
    required: [true,"Country is required"],
    trim: true
  },
  state: {
    type: String,
    required: [true,"State is required"],
    trim: true
  },
  city: {
    type: String,
    required: [true,"City is required"],
    trim: true
  },
  
  role: String,
  status: Number,
  info: String
});

// Apply the uniqueValidator plugin to UserSchema.
BussinessSchema.plugin(uniqueValidator);

// compile schema to model
const BussinessSchemaModel = mongoose.model('Register',BussinessSchema);

export default BussinessSchemaModel
