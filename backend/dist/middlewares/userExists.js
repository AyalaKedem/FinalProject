var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { User } from "../db/models/userM.js";
const userExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const found = yield User.findOne({ email: req.body.email });
        if (found) {
            return res.status(409).json({ message: "משתמש קיים במערכת" });
        }
        next();
    }
    catch (e) {
        res.status(500).json({ message: e });
    }
});
export { userExists };
