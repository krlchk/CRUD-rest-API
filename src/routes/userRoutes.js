import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserByID,
  updateUser,
} from "../controller/userController.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/user", validateUser, createUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserByID);
router.put("/user/:id", validateUser, updateUser);
router.delete("/user/:id", deleteUser);

export default router;
