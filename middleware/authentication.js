import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const token = req?.headers?.authorization?.split(" ")[1];
  console.log("============= test", token);
  if (!token) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log("========== err", err);
      return res.sendStatus(403).json({ error: err });
    } else {
      req.user = user;
      next();
    }
  });
};
