import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://himzei:9IKox2XtNgDNn6hY@cluster1.0e1vpkl.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;
const handleOpen = () => console.log("Connected DB");
db.on("error", (error) => console.log("DB Error", error));
console.log("db");
db.once("open", handleOpen);
