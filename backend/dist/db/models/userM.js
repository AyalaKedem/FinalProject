import { model } from "mongoose";
import { userSchema } from "../schemas/userS.js";
const User = model("User", userSchema);
export { User };
