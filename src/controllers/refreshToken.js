import User from "../models/User";
import jwt from "jsonwebtoken";

export const refreshToken = (req, res) => {
  try {
    console.log("안녕", req.cookies.refreshToken);
    console.log("안녕다시", req.cookies);
    // const refreshToken = req.cookies.refreshToken;
    // if (!refreshToken) return res.sendStatus(401);
    // const user = await User.findUnique({
    //   where: {
    //     refresh_token: refreshToken,
    //   },
    // });
    // if (!user) return res.sendStatus(403);
    // jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, decoded) => {
    //   if (err) return res.sendStatus(403);
    //   const userId = user.id;
    //   const username = user.username;
    //   const email = user.email;
    //   const accessToken = jwt.sign(
    //     { userId, username, email },
    //     process.env.ACCESS_SECRET,
    //     {
    //       expiresIn: "60s",
    //     }
    //   );
    //   res.json({ accessToken });
    // });
  } catch (error) {
    console.log(error);
  }
};
