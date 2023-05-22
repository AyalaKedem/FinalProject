import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userName: String,
    email: String,
    password: String,
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role'
        }
    ]
});
export { userSchema };
