import { Schema } from "mongoose";

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  userName: String,
  email: String,
  password: String,
});

// Role צריך להוסיף כאן

export { userSchema };
