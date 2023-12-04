import mongoose from "mongoose";

export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URL);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDb is connected sucessfully");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error!!Please make sure MongoDB is running",
        +err
      );
      process.exit(1);
    });
  } catch (error) {
    console.log("Something goes wrong");
    console.log(error);
  }
}
