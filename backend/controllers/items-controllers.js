const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Item = require('../models/item');
const User = require('../models/user');


const addItemToCart = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
        );
    }
    const { name, description, price,creator} = req.body;
    
    const createdItem = new Item({
        name,
        description,
        price,
        creator,
        // creator:req.userData.userId,
    });

    let user;
    try{
        user = await User.findById(creator);
    }catch(err){
        console.log("creator problem",err);
        const error = new HttpError(
        'Creating item failed, please try again.',
        500
        );
        return next(error);
    }

    if(!user){
        const error = new HttpError('Could not find user for provided id.', 404);
        return next(error);
    }

    console.log(user);
    
    try {
        await createdItem.save();
        // const session = await mongoose.startSession();
        // session.startTransaction();
        // await createdItem.save({session : session}); 
        // user.items.push(createdItem);
        // await user.save({session : session});
        // await session.commitTransaction();
    } catch (err) {
        console.log("save problem",err);
        const error = new HttpError(
        'Creating item failed, please try again.',
        500
        );
        return next(error);
    }
    
    res.status(201).json({ item: createdItem });
}

exports.addItemToCart = addItemToCart;