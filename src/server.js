import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routers/apiRouter";
import userRouter from "./routers/userRouter";
import cookieParser from "cookie-parser"; // import { auth } from "./middlewares";
import session from "express-session";
import bodyParser from "body-parser";

const app = express();

let corsOptions = {
  origin: ["http://localhost:3000", "https://aladin-renewal.netlify.app"],
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      expires: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Home"));

app.use("/users", userRouter);
app.use("/api/v1", apiRouter);

export default app;
