import express from "express"
import { userLogin, userRegistration } from "../controllers/userController.js";
import adminOnly from "../utils/adminOnly.js";
import { authMiddleware } from "../utils/auth.js";
import User from "../models/User.js";

const router = express.Router();

//Route to get all user- Accesible only for admin user
router.get('/allusers', authMiddleware, adminOnly, async  (req,res) => {
    const role = req.user.role
    console.log(role)
    const users = await User.find().select({username: 1, role: 1, _id: 0});
    res.json(users)
})

//Required routes to create user and login user
router.post('/register', userRegistration)
router.post('/login', userLogin);

export default router