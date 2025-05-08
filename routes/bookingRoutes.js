const express = require('express');
const router = express.Router();
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const { bookingValidation, validate } = require('../middleware/validate');
const auth = require('../middleware/auth');

router.post('/', auth, bookingValidation, validate, bookActivity);
router.get('/my', auth, getMyBookings);

module.exports = router; 