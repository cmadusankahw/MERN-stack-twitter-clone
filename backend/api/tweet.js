const tweet = require('express').Router();
const Tweet = require('../models/Tweet');

tweet.post('/new', async (req, res, next) => {
    const data = req.body;
    try {
        const response = await Tweet.insertMany(data);
        res.json({newId: response._id})
    }
    catch (err) {
        res.json({error: err})
    }
})


tweet.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const response = await Tweet.findById(id);
        res.json({newId: response})
    }
    catch (err) {
        res.json({error: err})
    }
})

module.exports = tweet;