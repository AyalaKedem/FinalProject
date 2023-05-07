var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import _ from "underscore";
import bcrypt from "bcryptjs";
import { User } from "../db/models/userM.js";
import { signUpValidate } from "../middlewares/signUpValidate.js";
import { userExists } from "../middlewares/userExists.js";
import { signInValidate } from "../middlewares/signInValidate.js";
const router = Router();
router.post("/signup", signUpValidate, userExists, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = _.pick(req.body, "userName", "email", "password");
    body.password = yield bcrypt.hash(body.password, 12);
    try {
        const user = yield new User(body).save();
        return res.json({ message: "נוספת בהצלחה!", id: user._id });
    }
    catch (e) {
        return res.status(500).json({ message: "Server DB Error", error: e });
    }
}));
router.post("/signin", signInValidate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield User.findOne({ email: req.body.email });
    const isPasswordValid = yield bcrypt.compare(req.body.password, user.password);
    try {
        if (!user || !isPasswordValid) {
            return res.status(401).json({ message: "אחד או יותר מהנתונים שהכנסת שגויים" });
        }
        return res.status(200).json({ message: "התחברת בהצלחה" });
    }
    catch (e) {
        return res.status(500).json({ message: "Server DB Error", error: e });
    }
}));
export { router as authRouter };
