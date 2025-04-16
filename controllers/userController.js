import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { email, password } = req?.body || {};
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.insertOne({ email, password: hashedPassword });
    res.json({ ...user, message: "User created" });
  } catch (e) {
    console.log(e);
  }
};

export const login = async (req, res) => {
  try {
    const { email = "", password = "" } = req?.body || {};
    const user = await User.findOne({ email });
    const isPasswordMatched = await bcrypt.compare(password, user?.password);
    if (!user || !isPasswordMatched) {
      return res.status(401).send({
        error: !user
          ? `${email} is not available`
          : !isPasswordMatched
          ? "Invalid Credentials"
          : "",
      });
    }

    const token = jwt.sign({ id: user._id });
    return res.json({ token });
  } catch (e) {
    console.log(e);
  }
};
