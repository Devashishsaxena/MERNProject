import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ContactSchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: [true, "First Name is required"],
        lowercase: true,
        trim: true,
    },
   
    email: {
        type: String,
        required: [true, "Email Id is required"],
        unique: true,
        lowercase: true,
        trim: true
    },
    contact: {
        type: String,
        required: [true, "Mobile is required"],
        lowercase: true,
        trim: true
    },
    address: {
        type: String,
        required: [true, "Address is required"],
        lowercase: true,
        trim: true
    },
    message: {
        type: String,
        required: [true, "Message is required"],
        lowercase: true,
        trim: true
    },
    role: String,
    status: Number,
    info: String
});

// Apply the uniqueValidator plugin to UserSchema.
ContactSchema.plugin(uniqueValidator);

// compile schema to model
const ContactSchemaModel = mongoose.model('Contact', ContactSchema);

export default ContactSchemaModel
