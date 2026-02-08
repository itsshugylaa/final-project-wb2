import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
)

export default mongoose.model("Booking", bookingSchema)