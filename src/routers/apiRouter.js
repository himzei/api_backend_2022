import express from "express";
import {
  itemNewAll,
  itemNewSpecial,
  itemEditorChoice,
  bestseller,
  blogBest,
} from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get("/itemNewAll", itemNewAll);
apiRouter.get("/itemNewSpecial", itemNewSpecial);
apiRouter.get("/itemEditorChoice", itemEditorChoice);
apiRouter.get("/bestseller", bestseller);
apiRouter.get("/blogBest", blogBest);

export default apiRouter;
