import User from "../models/User.js";
import { signToken } from "../utils/auth.js";

//Register a user logic 
export const userRegistration = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = signToken(user);
    res.status(201).json({ token, user });
  } catch (error) {
    console.log(error);
    if (error.code === 11000 && error.keyPattern?.email) {
      return res.status(400).json({ message: "Email id Exists!" });
    }
    if (error.name === "ValidationError") {
      //  return res.status(400).json({message: error.message})
      const messages = Object.values(error.errors).map((e) => e.message);
      console.log(messages[0]);
      return res.status(400).json({ errors: messages[0] });
    }
    return res
      .status(400)
      .json({ message: error.message || "Registration failed!" });
  }
};


//User login logic
export const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const correctPw = await user.isCorrectPassword(req.body.password);

    if (!correctPw) {
      return res.status(401).json({ message: "Invalid email or password!" });
    }

    const token = signToken(user);
    res.status(200).json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later" });
  }
};

