const db = require("../models");

module.exports = {
    findAll: function(req, res){

    },
    findById: function(req, res){

    },
    create: function(req, res){
        const user = {
            _id: req.body._id,
            username: req.body.username
        };
        db.User
            .create(user)
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res){

    },
    remove: function(req, res){

    }
}