const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();
const Users = require('../controllers/Users');
const { HandleError } = require('../middlewares/HandleError');

router.post('/', rescue(Users.createUser));
router.get('/:id', rescue(Users.getUser));
router.put('/:id', rescue(Users.updateUser));
router.delete('/:id', rescue(Users.deleteUser));

router.use(HandleError);
module.exports = router;