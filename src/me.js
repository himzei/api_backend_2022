export const me = (req, res) => {
  res.send({
    ok: "true",
    data: {
      hello: "how are you",
      _id: req.user._id,
      username: req.user.username,
    },
  });
};
