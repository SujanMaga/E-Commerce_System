const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(process.env.DB_URI)
    .then((data) => {
      console.log(`Mongodb Connected sith server : ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
