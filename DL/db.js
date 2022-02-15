const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
      },
      (err) => {
        if (err) {
          console.log("error connecting to mongoDB");
          return err;
        }
        console.log(
          "connected to mongoDB succefully\n",
          mongoose.connection.readyState
        );
      }
    );
  } catch (e) {
    console.log("error connecting to mongoose");
  }
};

connectToDB();
