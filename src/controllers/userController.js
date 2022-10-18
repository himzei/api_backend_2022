import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

export const postLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .render("login", { errorMessage: "아이디가 없습니다." });
    }
    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      return res.status(400).redirect("/users/login", {
        errorMessage: "username/password 가 다릅니다.",
      });
    }

    const accessToken = await jwt.sign(
      { id: user.id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({ accessToken });
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
    });
    res.json({ ok: "true" });
  } catch (error) {
    res.json({ ok: "false", error: `에러가 발생햇씁니다. ${error.code}` });
  }
};
