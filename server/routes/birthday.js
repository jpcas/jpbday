const router = require('express').Router();

const {
    username,
    cohort_number,
    month,
    date
} = require('../models/birhday.model');

router.route('/').get(getbirthdays);
router.route('/').get(addbirthdays);
router.route('/:id').get(getBirthdaysById);
router.route('/:id').delete(deleteBirthdayById); 

module.exports = router;




