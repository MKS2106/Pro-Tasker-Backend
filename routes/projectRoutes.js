import express from "express"
import { createProject, allProjects, projectById, updateProject, deleteProject } from "../controllers/projectController.js";
import { authMiddleware } from "../utils/auth.js";
import adminOnly from "../utils/adminOnly.js";

const router = express.Router();

router.use(authMiddleware);

router.post('/', createProject)
// router.post('/', adminOnly, projectCreate) // check before implementing
router.get('/', allProjects)
router.get('/:id', projectById)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)

// router.delete('/:id',adminOnly, deleteProject) // check before implementing

export default router