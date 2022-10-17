import express from "express";
import { getJoin, postJoin, postLogin } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/test", (req, res) => res.send("user test"));
userRouter.route("/signup").get(getJoin).post(postJoin);
userRouter.post("/login", postLogin);

export default userRouter;
