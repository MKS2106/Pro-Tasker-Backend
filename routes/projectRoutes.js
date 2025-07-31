import express from "express"
import { createProject, allProjects, projectById, updateProject, deleteProject } from "../controllers/projectController.js";
import { authMiddleware } from "../utils/auth.js";
import adminOnly from "../utils/adminOnly.js";
import Project from "../models/Project.js";
import User from "../models/User.js";

const router = express.Router();

router.use(authMiddleware);


//Admin only route 

router.get('/adminprojects', authMiddleware, adminOnly, async  (req,res) => {
    const role = req.user.role
    console.log(role)
    const projects = await Project.find().select({_id:1, name: 1}).populate("user", "username");
    res.json(projects)
})


router.post('/', createProject)
// router.post('/', adminOnly, projectCreate) // check before implementing
router.get('/', allProjects)
router.get('/:id', projectById)
router.put('/:id', updateProject)
router.delete('/:id', deleteProject)



// router.delete('/:id',adminOnly, deleteProject) // check before implementing

export default router