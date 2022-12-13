import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/User";
// import "./models/Favs";
import app from "./server";

const PORT = 8001;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT || 5000, handleListening);
