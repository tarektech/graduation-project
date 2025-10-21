const express = require('express');
const {check } = require('express-validator');

const itemsControllers = require('../controllers/items-controllers');

const checkAuth = require('../middleware/check-auth');

const router = express.Router();

// router.use(checkAuth);

router.post('/' ,[
    check('name').not().isEmpty(),
    check('description').isLength({min: 5}),
    check('price').isInt().not().isEmpty(),
], itemsControllers.addItemToCart);


module.exports = router;