import express from "express"
import {
  createBooking,
  getBookings,
  deleteBooking
} from "../controllers/booking.controller.js"

import authMiddleware from "../middleware/authMiddleware.js"
import adminMiddleware from "../middleware/adminMiddleware.js"

const router = express.Router()

router.post("/", authMiddleware, createBooking)
router.get("/", authMiddleware, adminMiddleware, getBookings)
router.delete("/:id", authMiddleware, adminMiddleware, deleteBooking)

export default router