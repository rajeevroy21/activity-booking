const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

// Book an Activity
exports.bookActivity = async (req, res) => {
  try {
    const { activityId } = req.body;
    const userId = req.user.userId;
    // Check if activity exists
    const activity = await Activity.findById(activityId);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    // Create booking
    const booking = new Booking({
      user: userId,
      activity: activityId
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get My Bookings
exports.getMyBookings = async (req, res) => {
  try {
    const userId = req.user.userId;
    const bookings = await Booking.find({ user: userId }).populate('activity');
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}; 