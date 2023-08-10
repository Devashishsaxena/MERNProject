import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = mongoose.Schema({
    _id: Number,
    oldpass: {
        type: String,
        required: [true, "Old Password is required"],
        lowercase: true,
        trim: true,
    },

    password: {
        type: String,
        required: [true, "New Password is required"],
        unique: true,
        lowercase: true,
        trim: true
    },
    comfirms: {
        type: String,
        required: [true, "Confirm Password is required"],
        lowercase: true,
        trim: true
    },
    role: String,
    status: Number,
    info: String
});

// Apply the uniqueValidator plugin to UserSchema.
UserSchema.plugin(uniqueValidator);

// compile schema to model
const UserSchemaModel = mongoose.model('user', UserSchema);

export default UserSchemaModel
