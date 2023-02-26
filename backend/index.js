const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");

dotenv.config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to database successfully"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);

app.listen(process.env.PORT || 5000, "localhost", () => {
  console.log("Server Running");
});
