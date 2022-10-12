import express from "express";

const userRouter = express.Router();

const handleUser = (req, res) => res.send("dkjasldfjda;sf");

userRouter.get("/", handleUser);

export default userRouter;
