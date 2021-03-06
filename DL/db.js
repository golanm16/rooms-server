const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_PRIVATE,
      {
        useNewUrlParser: true,
      },
      (err) => {
        if (err) {
          console.log("error connecting to mongoDB");
          return err;
        }
        console.log("connected to mongoDB succefully\n");
      }
    );
  } catch (e) {
    console.log("error connecting to mongoose");
  }
};
