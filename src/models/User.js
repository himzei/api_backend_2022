import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  createdAt: Date,
});

userSchema.pre("save", async function () {
  console.log("users password", this.password);
  this.password = await bcrypt.hash(this.password, 5);
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
