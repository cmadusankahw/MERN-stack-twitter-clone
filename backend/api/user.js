const user = require('express').Router();
const User = require('../models/User');

user.post('/new', async (req, res, next) => {
    const data = req.body;
    try {
        const response = await User.insertMany(data);
        res.json({newId: response._id})
    }
    catch (err) {
        res.json({error: err})
    }
})


user.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await User.findById(id);
        res.json({newId: response})
    }
    catch (err) {
        res.json({error: err})
    }
})

module.exports = user;