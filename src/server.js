import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routers/apiRouter";
import userRouter from "./routers/userRouter";
import cookieParser from "cookie-parser"; // import { auth } from "./middlewares";

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Home"));

app.use("/users", userRouter);
app.use("/api/v1", apiRouter);

export default app;
