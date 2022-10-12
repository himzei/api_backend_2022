import express from "express";
import { handleApi } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get("/", handleApi);

export default handleApi;
