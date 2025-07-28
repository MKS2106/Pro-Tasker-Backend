import express from "express"
import { authMiddleware } from "../utils/auth.js";
import { createTasks, getTasks, updateTask, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.use(authMiddleware);

router.post('/:id', createTasks)
router.get('/:id', getTasks)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router