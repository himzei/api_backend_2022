import express from "express";
import {
  finishGithubLogin,
  postJoin,
  postLogin,
} from "../controllers/userController";
import { me } from "../me";
import { auth, authenticateToken } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/me", auth, me);
userRouter.get("/post", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username == req.user.name));
});
userRouter.post("/login", postLogin);
userRouter.post("/signup", postJoin);

userRouter.get("/test", auth, (req, res) =>
  res.json({ "how are you?": req.cookies })
);
// userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/callback", finishGithubLogin);

export default userRouter;
