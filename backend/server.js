const app = require("./app.js");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

//configuration

dotenv.config({ path: "backend/config/config.env" });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

//connecting database
connectDatabase();
