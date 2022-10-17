import "./db";
import "./models/User";
import app from "./server";

const handleListening = () =>
  console.log(`Server listening on port http://localhost`);

app.listen(process.env.PORT || 4000, handleListening);
