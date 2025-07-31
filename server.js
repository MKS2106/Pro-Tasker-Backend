import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import db from "./config/connection.js";
import usersRouter from './routes/userRoutes.js'
import projectsRouter from './routes/projectRoutes.js'
import tasksRouter from './routes/taskRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// app.use(cors({origin: 'http://localhost:5173'}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/users", usersRouter)
app.use('/api/projects', projectsRouter)
app.use('/api/tasks', tasksRouter)

app.get('/', (req,res) => {
  res.send("Welcome to Pro-Tasker App!!!")
})

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});