import mongoose from "mongoose";
import dotenv from "dotenv";
//Load env variables into process.env
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

export default mongoose.connection;