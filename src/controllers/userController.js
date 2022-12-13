import bcrypt from "bcrypt";
import fetch from "node-fetch";
import User from "../models/User";
import Favs from "../models/Favs";
import jwt from "jsonwebtoken";

export const postToggleFav = async (req, res) => {
  console.log(req.user);
  const { isbn, title, description, cover, pubDate, publisher } = req.body;

  // Boolean 값 반환
  // const exists = await User.exists({ _id: req.user._id });
  // if (!exists) {
  //   res.json({ ok: "false", error: "유저가 존재하지 않습니다." });
  // }
  try {
    await Favs.create({
      isbn,
      title,
      description,
      cover,
      pubDate,
      publisher,
      createdAt: Date.now(),
      // owner: req.user.id,
    });
  } catch (error) {
    console.log(error);
  }
  res.json({ ok: true });
};

export const postJoin = async (req, res) => {
  const { username, email, password, password2 } = req.body;

  if (password !== password2) {
    res.json({ ok: "false", error: "입력하신 패스워드가 다릅니다." });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    res.json({ ok: "false", error: "username/email 이 존재하지 않습니다." });
  }
  try {
    await User.create({
      username,
      email,
      password,
      createdAt: Date.now(),
    });
    res.json({ ok: "true" });
  } catch (error) {
    console.log(error);
    res.json({ ok: "false", error: `에러가 발생햇씁니다. ${error.code}` });
  }
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ ok: "error", error: "아이디가 없습니다." });
    }
    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      return res.json({ ok: "error", error: "아이디/패스워드가 다릅니다." });
    }

    const token = jwt.sign({ id: user.id }, process.env.SESSION_SECRET);

    res
      .cookie("auth", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true })
      .json({
        ok: true,
        token,
      });
  } catch (error) {
    console.log(error);
  }
};

export const postLogout = (req, res) => {
  console.log("sever button");
  return res.clearCookie("auth", { path: "/", httpOnly: true }).json({
    ok: true,
  });
};

// export const startGithubLogin = (req, res) => {
//   const baseUrl = `https://github.com/login/oauth/authorize`;
//   const config = {
//     clientId: "afeec0fffd0d2a881924",
//     allow_signup: false,
//     scope: "read:user user:email",
//   };
//   const params = new URLSearchParams(config).toString();
//   const finalUrl = `${baseUrl}?${params}`;
//   return res.redirect(finalUrl);
// };

export const finishGithubLogin = async (req, res) => {
  const baseUrl = "https://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_ID,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();

  if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    const userRequest = await (
      await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    console.log(userRequest);
  } else {
    return res.redirect("/login");
  }
};
