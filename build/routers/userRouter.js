import express from "express";
import { postJoin, postLogin } from "../controllers/userController";
import { authenticateToken } from "../middlewares";

const userRouter = express.Router();

let posts = [{
  id: 1,
  username: "eunsung",
  title: "Post 1"
}, {
  id: 2,
  username: "nadang",
  title: "Post 2"
}];

userRouter.get("/test", (req, res) => res.json({ test: "test" }));
userRouter.get("/post", authenticateToken, (req, res) => {
  res.json(posts.filter(post => post.username == req.user.name));
});
userRouter.post("/signup", postJoin);
userRouter.post("/login", postLogin);

export default userRouter;