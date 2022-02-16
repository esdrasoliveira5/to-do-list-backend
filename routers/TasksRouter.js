const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();
const Tasks = require('../controllers/Tasks');
const { HandleError } = require('../middlewares/HandleError');

router.post('/', rescue(Tasks.createTasks));
router.get('/', rescue(Tasks.getAllTasks));
router.get('/category/:id', rescue(Tasks.getCategoryTasks));
router.put('/category/:id', rescue(Tasks.updateCategoriesTasks));
router.get('/:id', rescue(Tasks.getTasks));
router.put('/:id', rescue(Tasks.updateTasks));
router.delete('/:id', rescue(Tasks.deleteTasks));

router.use(HandleError);
module.exports = router;