import { RequestHandler } from "express";
import { User } from "../db/models/userM.js";

const userExists: RequestHandler = async (req, res, next) => {
  try {
    const found = await User.findOne({ email: req.body.email });
    if (found) {
      return res.status(409).json({ message: "משתמש קיים במערכת" });
    }
    next();
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

export { userExists };
