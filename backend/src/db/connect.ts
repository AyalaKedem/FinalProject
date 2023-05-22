import mongoose from "mongoose";
import dbConfig from './config/db.config.js'
import { Role } from "./models/roleM.js";

const {HOST, DB, PORT, ROLES} = dbConfig

const connect = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`);
  console.log(`Successfully connected to ${DB}`);
  initDB();
};

const initDB = () => {
  Role.estimatedDocumentCount((err, count) => {
    if(!err && count === 0) {
      ROLES.map(r => new Role({name: r})).forEach(role => {
        role.save()
      })
    }
  })
}

connect().catch((err) => console.log(err));

export { connect };
