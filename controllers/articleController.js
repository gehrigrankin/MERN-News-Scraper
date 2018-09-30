const db = require("../models");

module.exports = {
    findAll: function(req, res){

    },
    findById: function(req, res){

    },
    create: function(req, res){
        const article = {
            _id: req.body._id,
            title: req.body.headline.main,
            url: req.body.web_url
        };
        db.Article
            .create(article)
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res){

    },
    remove: function(req, res){

    }
}