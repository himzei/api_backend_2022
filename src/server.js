import express from "express";
import morgan from "morgan";
import apiRouter from "./routers/apiRouter";

const PORT = 4000;
const app = express();
app.use(morgan("dev"));

const handleHome = (req, res) => res.send("home");

app.get("/", handleHome);
app.use("/api/v1", apiRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
