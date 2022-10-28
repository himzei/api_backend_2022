import express from "express";
import { refreshToken } from "../controllers/RefreshToken";
import {
  finishGithubLogin,
  getUsers,
  postJoin,
  postLogin,
} from "../controllers/userController";
import { authenticateToken } from "../middlewares";

const userRouter = express.Router();

const test = (req, res) => {
  res.cookie("auth", Date.now(), {
    httpOnly: true,
    maxAge: 1000 * 5,
  });
  res.json({ auth: req.cookies.auth });
};

userRouter.get("", getUsers);
userRouter.get("/test", test);
userRouter.get("/token", refreshToken);
userRouter.get("/post", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username == req.user.name));
});
userRouter.post("/signup", postJoin);
userRouter.post("/login", postLogin);

// userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/callback", finishGithubLogin);

export default userRouter;
