const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const tweet = require('./api/tweet');
const user = require('./api/user');
const app = express();

app.use(bodyparser.json());

app.use('/tweet', tweet)

mongoose.connect('mongodb://localhost/twitter', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.get('/test', (req,res,next) => {
    res.send("REST Working!");
})

app.post('/test/:id', (req,res,next) => {
    res.send(req.params,id, req.body.name);
})

app.listen(3001);