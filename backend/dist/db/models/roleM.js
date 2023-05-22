import { model } from "mongoose";
import { roleSchema } from "../schemas/roleS.js";
const Role = model('Role', roleSchema);
export { Role };
