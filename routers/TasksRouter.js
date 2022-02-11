const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();
const Tasks = require('../controllers/Tasks');
const { HandleError } = require('../middlewares/HandleError');

router.post('/', rescue(Tasks.createTasks));
router.get('/', rescue(Tasks.getAllTasks));

router.use(HandleError);
module.exports = router;