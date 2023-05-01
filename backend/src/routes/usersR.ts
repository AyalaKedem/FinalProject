import { Router } from "express";
import _ from "underscore";
import bcrypt from "bcryptjs";
import { User } from "../db/models/userM.js";
import { signUpValidate } from "../middlewares/signUpValidate.js";
import { userExists } from "../middlewares/userExists.js";
import { signInValidate } from "../middlewares/signInValidate.js";

const router = Router();

router.post("/signup", signUpValidate, userExists, async (req, res) => {
  const body = _.pick(req.body, "userName", "email", "password");
  body.password = await bcrypt.hash(body.password, 12);

  try {
    const user = await new User(body).save();
    return res.json({ message: "נוספת בהצלחה!", id: user._id });
  } catch (e) {
    return res.status(500).json({ message: "Server DB Error", error: e });
  }
});

router.post("/signin", signInValidate, async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

  try {
    if (!user || !isPasswordValid) {
      return res.status(401).json({ message: "אחד או יותר מהנתונים שהכנסת שגויים" });
    }

    return res.status(200).json({ message: "התחברת בהצלחה" });
  } catch (e) {
    return res.status(500).json({ message: "Server DB Error", error: e });
  }
});

export { router as authRouter };
