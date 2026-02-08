import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"

import authRoutes from "./routes/auth.routes.js"
import bookingRoutes from "./routes/booking.routes.js"

dotenv.config()
connectDB()

const app = express()

app.get("/", (req, res) => {
  res.status(200).send("Travel Backend API is running")
})

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes)
app.use("/api/bookings", bookingRoutes)

app.use((req, res) => {
  res.status(404).send("Route not found")
})

const PORT = process.env.PORT || 5050
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})