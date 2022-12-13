import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;
const handleOpen = () => console.log("Connected DB");
db.on("error", (error) => console.log("DB Error", error));
console.log("db");
db.once("open", handleOpen);
