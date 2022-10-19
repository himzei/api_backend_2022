import express from "express";
import {
  finishGithubLogin,
  postJoin,
  postLogin,
  startGithubLogin,
} from "../controllers/userController";
import { authenticateToken } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/test", (req, res) => res.json({ test: "test" }));
userRouter.get("/post", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username == req.user.name));
});
userRouter.post("/signup", postJoin);
userRouter.post("/login", postLogin);

userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/callback", finishGithubLogin);

export default userRouter;
