import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import apiRouter from "./routers/apiRouter";
import userRouter from "./routers/userRouter";

const app = express();

// app.set("view engine", "json");
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "hello",
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

// app.use((req, res, next) => {
//   req.sessionStore.all((error, sessions) => {
//     next();
//   });
// });

// app.use(authenticateToken);
app.get("/", (req, res) => res.send("Home"));
app.use("/users", userRouter);
app.use("/api/v1", apiRouter);

export default app;
