const db = require("../models");
const axios = require("axios");
var cheerio = require("cheerio");

let returnResult = "fuck you";

module.exports = {
    findAll: function(req, res){
        db.Article
            .find(req.query)
            .sort({ date: -1 })
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res){
        db.Article
            .findById(req.params.id)
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    },
    scrapeById: function(req, res){
        db.Article
            .findById(req.params.id)
            .then(async function(dbArticle){
                await getFullDoc(dbArticle)

                res.json(returnResult)
            })
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res){
        console.log("blah")
        const article = {
            _id: req.body.id,
            headline: req.body.headline,
            topic: req.body.topic,
            time: req.body.time,
            summary: req.body.summary,
            src: req.body.src
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

async function getFullDoc(x){
    
    axios.get(x.src)
    .then(function(response) {
        const result = {};
        const $ = cheerio.load(response.data);
        console.log("AAA: ")

        delete result.summary;

        result.id = x.id
        
        result.headline = x.headline;
        result.time = x.time;
        result.topic = x.topic;
        result.content = [];
        result.links = [];

        $(".p-text").each(function(i, element) {
            result.content.push($(this).text())
        })

        $(".exclude-from-newsgate").children("a").each(function(i, element){
            let linkText = $(this).text();
            let linkSrc = $(this).attr("href");

            const linkObj = {
                text: linkText,
                src: linkSrc
            }

            result.links.push(linkObj)
        })

        returnResult = result;
        console.log("AAAAA" + result)
    })
    .catch(err => err.status(422).json(err))

}