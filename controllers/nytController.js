const axios = require("axios");
var cheerio = require("cheerio");
const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        // const params = Object.assign({
        //     api_key: "9b3adf57854f4a19b7b5782cdd6e427a"
        // }, req.query );

        // axios.get(
        //     "https://api.nytimes.com/svc/search/v2/articlesearch.json", { params }
        // )
        //     .then(response => {
        //         db.Article
        //             .find()
        //             .then(dbArticles =>
        //                 res.json(response.data.response.docs)

        //             )
        //             .catch(err => res.status(422).json(err));
        //     }
        // );

        
            // First, we grab the body of the html with request
        axios.get("https://www.washingtonpost.com/opinions/the-posts-view/?utm_term=.ed2bd055905b")
        .then(function(response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            const $ = cheerio.load(response.data);
            const resultsArr = [];
        
            // Now, we grab every stor-body class, and do the following:
            $(".story-list-story").each(function(i, element) {
                // Save an empty result object
                let result = {};
            
                // Add the text and href of every link, and save them as properties of the result object
                result.headline = $(this)
                    .children(".story-body")
                    .children("story-headline")
                    .children("h3")
                    .children("a")
                    .text();
                result.summary = $(this)
                    .children(".story-body")
                    .children(".story-description")
                    .children("p")
                    .text();
                result.img = $(this)
                    .children(".story-image")
                    .children("a")
                    .attr("href")

                resultsArr.push(result)
            });

// If we were able to successfully scrape and save an Article, send a message to the client
            res.json(resultsArr);
        })
        .catch(err => res.status(422).json(err));
      
    }
};
  