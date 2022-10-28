import bcrypt from "bcrypt";
import fetch from "node-fetch";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ ok: "error", error: "아이디가 없습니다." });
    }
    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      res
        .status(400)
        .json({ ok: "error", error: "아이디/패스워드가 다릅니다." });
    }
    const accessToken = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.ACCESS_SECRET,
      {
        expiresIn: "60s",
      }
    );

    const refreshToken = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.REFRESH_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("refreshToken", refreshToken, {
      sameSite: "None",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.log(error);
  }
};

export const getJoin = (req, res) => res.send("Get Join");

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
