import jwt from "jsonwebtoken";
import User from "./models/User";

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

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.email = decoded.email;
    next();
  });
};

export const isLoggedIn = (req, res, next) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }

  next();
};

export const auth = async (req, res, next) => {
  let tokenQuery = req.headers.cookie;

  let token;
  if (tokenQuery) {
    token = tokenQuery.substring(5);
  } else {
    return res.json({ ok: false });
  }

  await jwt.verify(
    token,
    process.env.SESSION_SECRET,
    async (error, decoded) => {
      if (error) {
        return res
          .status(500)
          .json({ error: "token을 decoded하는데 실패했습니다." });
      }

      await User.findOne({ _id: decoded.id }, (error, user) => {
        if (error) {
          return res.json({ error: "DB에서 찾는 도중 오류가 발생하였습니다." });
        }
        if (!user) {
          return res.status(400).json({
            isAuth: false,
            error: "Token에 해당하는 유저가 없습니다.",
          });
        }
        if (user) {
          req.token = token;
          req.user = user;
        }
      });
    }
  );

  next();
};
