const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log("berhasil terhubung wanz");
  } catch (error) {
    console.error("error  di database bang wanz:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
