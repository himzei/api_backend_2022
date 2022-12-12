import express from "express";
import {
  finishGithubLogin,
  postJoin,
  postLogin,
  postLogout,
  postToggleFav,
} from "../controllers/userController";
import { me } from "../me";
import { auth, authenticateToken } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/me", auth, me);
userRouter.get("/post", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username == req.user.name));
});
userRouter.get("/login", postLogin);
userRouter.get("/logout", postLogout);
userRouter.post("/signup", postJoin);

userRouter.post("/toggleFav", auth, postToggleFav);

// userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/callback", finishGithubLogin);

export default userRouter;
