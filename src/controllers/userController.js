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

    const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
    return {
      ok: true,
      token,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getJoin = (req, res) => res.send("Get Join");

export const postJoin = async (req, res) => {
  const { username, email, password, password2 } = req.body;
  if (password !== password2) {
    return res.status(400).render("/join", {
      errorMessage: "입력하신 패스워드가 다릅니다.",
    });
  }
  const exists = await User.exists({ $or: [{ username }, { email }] });
  if (exists) {
    return res.status(400).redirect("/users/signup", {
      errorMessage: "아이디/이메일이 이미 사용중입니다.",
    });
  }
  try {
    await User.create({
      username,
      email,
      password,
    });
    return res.status(200).redirect("/");
  } catch (error) {
    console.log(error);
  }
};
