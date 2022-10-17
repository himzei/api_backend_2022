import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import apiRouter from "./routers/apiRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";

const app = express();

// app.set("view engine", "json");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "hello",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/aladin" }),
  })
);

// app.use((req, res, next) => {
//   req.sessionStore.all((error, sessions) => {
//     next();
//   });
// });

app.use(localsMiddleware);
app.get("/", (req, res) => res.send("Home"));
app.use("/users", userRouter);
app.use("/api/v1", apiRouter);

export default app;
