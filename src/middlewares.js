import jwt from "jsonwebtoken";
import User from "./models/User";

export const authenticateToken = (req, res, next) => {
  const token = req.headers["auth-token"];
  if (token == null) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(
      token,
      "8882a5349c4de2cc80d6b11ca0c08a487fa17f276fc29f8ccce213a2dedbdcb4489e10cd7563630e5affd4d87c2d3d0dc1a37feabbd77f75ca42f65f503bd6f2"
    );
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
  jwt.verify(
    token,
    "8882a5349c4de2cc80d6b11ca0c08a487fa17f276fc29f8ccce213a2dedbdcb4489e10cd7563630e5affd4d87c2d3d0dc1a37feabbd77f75ca42f65f503bd6f2",
    (err, decoded) => {
      if (err) return res.sendStatus(403);
      req.email = decoded.email;
      next();
    }
  );
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
    "dEQBaJNW6MMVGcwQjGze56rGJhn6gUnwhnqzEezb",
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
