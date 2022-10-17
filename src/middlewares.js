export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "알라딘 중고서점 리뉴얼";
  res.locals.loggedInUser = req.session.user;
  console.log(res.locals);
  next();
};
