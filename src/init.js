import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/User";
// import "./models/Favs";
import app from "./server";

const handleListening = () =>
  console.log(
    `✅ Server listenting on http://localhost:${process.env.PORT} 🚀`
  );

app.listen(process.env.PORT || 5000, handleListening);
