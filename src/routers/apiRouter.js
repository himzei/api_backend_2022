import express from "express";
import {
  itemNewAll,
  itemNewSpecial,
  bestseller,
  blogBest,
  bookDetail,
  inBound,
  outBound,
  music,
  used,
  dvd,
  eBook,
  search,
  bestsellerLastMonth,
  bestsellerLastYear,
} from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get("/itemNewAll", itemNewAll);
apiRouter.get("/itemNewSpecial", itemNewSpecial);
apiRouter.get("/bestseller", bestseller);
apiRouter.get("/bestsellerlastmonth", bestsellerLastMonth);
apiRouter.get("/bestsellerlastyear", bestsellerLastYear);
apiRouter.get("/blogBest", blogBest);
apiRouter.get("/book/:id", bookDetail);
apiRouter.get("/inbound", inBound);
apiRouter.get("/outbound", outBound);
apiRouter.get("/music", music);
apiRouter.get("/dvd", dvd);
apiRouter.get("/used", used);
apiRouter.get("/eBook", eBook);
apiRouter.get("/search/:term", search);
apiRouter.get("/test", (req, res) => res.send("api v1 test"));

export default apiRouter;
