import Project from "../models/Project.js";
import Task from "../models/Task.js";

// Create new project
export const createProject = async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user: req.user._id,
    });
    const populatedProject = await newProject.populate("user", "username");
    console.log(populatedProject);
    res.status(201).json(populatedProject);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

//list all projects for the user
export const allProjects = async (req, res) => {
  try {
    const currentUser = req.user._id;
    console.log(currentUser);
    const projects = await Project.find({ user: req.user._id })
      .populate("user", "username")
      .populate("task", "title");
    res.status(200).json(projects);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

//Get project details based on the project ID
export const projectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).populate(
      "task",
      "title"
    );
    if (!project) {
      return res.status(404).json({ message: "No such project found" });
    }
    if (project.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json("User is not authorised to access the project information");
    }
    const populatedProject = await Project.findById(req.params.id)
      .populate("task", "title description status")
      .populate("user", "username");
    res.status(201).json(populatedProject);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

//Update porject based on the porject ID
export const updateProject = async (req, res) => {
  try {
    //Grab the project based on the project ID
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "No such project found" });
    }
    if (project.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json("User is not authorised to update the project information");
    }

    //Grab the project based on the project ID and update the project details
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(201).json(updatedProject);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

//Delete porject based on the porject ID
export const deleteProject = async (req, res) => {
  try {
    //Grab the project based on the project ID
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "No such project found" });
    }
    if (project.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json("User is not authorised to delete the project information");
    }

    //Grab the project based on the project ID and delete the project
    const deletedProject = await Project.findByIdAndDelete(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json(deletedProject);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};
