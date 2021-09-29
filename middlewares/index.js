const { body, param, validationResult } = require('express-validator');

exports.handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}

exports.removeUsersValidation = [
    body('users', 'users is required').isArray({min: 1}),
    body('users.*', 'users is not valid').isString().notEmpty()
]

exports.addUserValidation = [
    body('firstName', 'firstName is required').isString().notEmpty(),
    body('lastName', 'lastName is required').isString().notEmpty(),
    body('email', 'email is required').isString().notEmpty(),
    body('email', 'email is not valid').isEmail(),
];

exports.setUserStatusValidation = [
    param('id', 'id is required').isString().notEmpty(),
    body('status', 'status is required').isString().notEmpty()
]