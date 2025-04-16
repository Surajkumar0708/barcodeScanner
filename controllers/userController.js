import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { email, password } = req?.body || {};
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.insertOne({ email, password: hashedPassword });
    res.json({ message: "User created successfully" });
  } catch (e) {
    console.log(e);
  }
};

export const login = async (req, res) => {
  try {
    const { email = "", password = "" } = req.body || {};

    const user = await User.findOne({ email });
    console.log("==========email", email, password, "user", user);
    if (!user) {
      return res.status(401).send({ error: `${email} is not available` });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
      return res.status(401).send({ error: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    return res.json({ token, email: user.email });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
