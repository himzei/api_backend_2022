import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routers/apiRouter";
import userRouter from "./routers/userRouter";
import cookieParser from "cookie-parser"; // import { auth } from "./middlewares";

const app = express();

let corsOptions = {
  origin: ["http://localhost:3000", "https://aladin-renewal.netlify.app"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Home"));

app.use("/users", userRouter);
app.use("/api/v1", apiRouter);

export default app;
