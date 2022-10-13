import express from "express";
import morgan from "morgan";
import cors from "cors";
import apiRouter from "./routers/apiRouter";

const PORT = 5000;
const app = express();

// app.set("view engine", "json");
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const handleHome = (req, res) => res.send("home");

app.get("/", handleHome);
app.use("/api/v1", apiRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
