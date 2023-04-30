import { Schema } from "mongoose";

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  email: { String, require: true },
  password: String,
});

// Role צריך להוסיף כאן

export { userSchema };
