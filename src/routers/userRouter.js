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

userRouter.get("", getUsers);
userRouter.get("/token", refreshToken);
userRouter.get("/post", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username == req.user.name));
});
userRouter.post("/signup", postJoin);
userRouter.post("/login", postLogin);
userRouter.get("/github/callback", finishGithubLogin);

export default userRouter;
