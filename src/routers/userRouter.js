import express from "express";
import {
  finishGithubLogin,
  postJoin,
  postLogin,
  postLogout,
  postToggleFav,
} from "../controllers/userController";
import { me } from "../me";
import { auth, isLoggedIn } from "../middlewares";

const userRouter = express.Router();

userRouter.get("/me", me);

userRouter.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});
userRouter.post("/login", postLogin);
userRouter.get("/logout", postLogout);
userRouter.post("/signup", postJoin);

userRouter.post("/toggleFav", auth, postToggleFav);

// userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/callback", finishGithubLogin);

export default userRouter;
