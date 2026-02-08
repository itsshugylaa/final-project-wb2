import Booking from "../models/Booking.js"

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      service: req.body.service,
      destination: req.body.destination,
      date: req.body.date,
      user: req.user._id
    })

    res.status(201).json(booking)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user", "name email")
    res.json(bookings)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id)
    res.json({ message: "Booking deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}