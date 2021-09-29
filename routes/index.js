const express = require('express');
const {addUser, setUserStatus, getUsers, removeUsers} = require('../controllers');
const { addUserValidation, setUserStatusValidation, removeUsersValidation, handleValidation} = require('../middlewares');
const router = express.Router();


router
    .route('/')
    .get(getUsers)

router.route('/add')
    .post(addUserValidation, handleValidation, addUser)

router
    .route('/:id')
    .put(setUserStatusValidation, handleValidation, setUserStatus)

router
    .route('/delete')
    .post(removeUsersValidation, handleValidation, removeUsers)


module.exports = router;