const axios = require("axios");
var cheerio = require("cheerio");
const db = require("../models");


let resultsArr = [];

module.exports = {
    findAll: function (req, res) {

        const mainSrc = "https://www.azcentral.com";
        
            // First, we grab the body of the html with request
        axios.get(mainSrc)
        .then(function(response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            const $ = cheerio.load(response.data);
            resultsArr = [];
        
            // Now, we grab every stor-body class, and do the following:
            $(".flm-asset-link").each(async function(i, element) {
                // Save an empty result object
                let result = {};
            
                // Add the text and href of every link, and save them as properties of the result object
                result.id = i;
                
                result.headline = $(this)
                    .children(".flm-text-wrap")
                    .children(".flm-hed")
                    .text();
                result.topic = $(this)
                    .children(".flm-text-wrap")
                    .children(".js-asset-section")
                    .text().trim();
                result.time = $(this)
                    .children(".flm-text-wrap")
                    .children(".flm-time-since-update")
                    .text().replace("|", "").trim();
                result.summary = $(this)
                    .children(".flm-text-wrap")
                    .children(".flm-summary")
                    .text().trim();
                result.src = mainSrc + $(this)
                    .attr("href");

                
                // result.fullDoc = getFullDoc(result.src)
                    
                // console.log(getFullDoc(result.src));
                console.log(result)

                if (result.topic !== "") {
                    resultsArr.push(result)
                }

                await getFullDoc(result);

            });

            // If we were able to successfully scrape and save an Article, send a message to the client
            res.json(resultsArr);
        })
        .catch(err => res.status(422).json(err));
      
    },
    findSelected: function (req, res) {
        const id = req.params.id;
        console.log("ID", id)
        res.json(resultsArr[id])
        
    }
};
  
async function getFullDoc(result){
    return (
        axios.get(result.src)
        .then(function(response) {
            const $ = cheerio.load(response.data);

            delete result.summary;
            
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
            resultsArr.push(result);
        })
        .catch(err => response.status(422).json(err))
    )
}