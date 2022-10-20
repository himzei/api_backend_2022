import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/User";
import app from "./server";

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(process.env.PORT || 5000, handleListening);
