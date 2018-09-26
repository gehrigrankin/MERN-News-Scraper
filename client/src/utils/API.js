import axios from "axios";
// import filterParams from "./filterParams";

export default {
  // Gets articles from the NYT API
  // getArticles: function(params) {
  //   return axios.get("/api/nyt", { params: filterParams(params) });
  // },
  getArticles: function(params) {
    return axios.get("/api/nyt");
  },
  getSelectedArticle: function(id){
    console.log("ID:", id)
    return axios.get("/api/nyt/" + id)
  },
  // Gets all saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles");
  },
  // Deletes the saved article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
