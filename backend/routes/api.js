const express = require('express');
const router = express.Router();
const recyclingController = require('../controllers/recyclingController');

router.post('/recycle', recyclingController.recycleItem);
router.get('/leaderboard', recyclingController.getLeaderboard);
router.post('/register', recyclingController.registerUser);
router.post('/login', recyclingController.loginUser);

module.exports = router;
