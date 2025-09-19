import express from "express";
import { createUser } from "./createUser.js";

const userRoutes = express.Router();

userRoutes.post("/register", createUser);
export default userRoutes;
