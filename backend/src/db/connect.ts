import mongoose from "mongoose";

const connect = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/secondHandDB");
  console.log("Successfully connected to secondHandDB");
};

connect().catch((err) => console.log(err));

export { connect };
