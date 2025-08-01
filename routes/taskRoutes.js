import express from "express"
import { authMiddleware } from "../utils/auth.js";
import { createTasks, getTasks, updateTask, deleteTask } from "../controllers/taskController.js";

// Create a new router instance
const router = express.Router();
// Apply authentication middleware to all routes in this router
router.use(authMiddleware);

// routes to perform CRUD operations
router.post('/:id', createTasks)
router.get('/:id', getTasks)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

export default router