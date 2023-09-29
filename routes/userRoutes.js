import express from "express";
import {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedList,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/liked/:email").get(getLikedMovies);
router.route("/add").post(addToLikedMovies);
router.route("/delete").put(removeFromLikedList);

export default router;
