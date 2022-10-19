import { jwt } from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const token = req.headers["auth-token"];
  if (token == null) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.ACCESS_SECRET);
    req.user = verified;
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
  next();
};
