export const me = (req, res) =>
  res.json({
    ok: "true",
    id: req.user.id,
    username: req.user.username,
  });
