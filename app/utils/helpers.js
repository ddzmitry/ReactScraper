// Here we will utilize the axios library to perform GET/POST requests
var axios = require("axios");
const key = "3e80502c0f1c44dc90a613e8c9980e02";



let helpers = {

    findArticles: function(lookingFor, beginDate, endDate, cb) {
        console.log()
        return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
                params: {
                    "api-key": key,
                    "q": lookingFor.trim(),
                    "begin_date": `${beginDate}0101`,
                    "end_date": `${endDate}1231`
                }
            })
            .then(function(data) {

                // console.log(data.data.response.docs);
                cb(data)
            });

    },

    saveArticle: function(headline, snippet, link) {


        console.log('Helper Saving Article')

        let articleToGo = { headline, snippet, link };

        return axios.post('/api/saved', articleToGo).then(function(response) {

            console.log('I was saved');
            console.log(response.data);

        });

    },
    findSavedData: function() {
        console.log('Helper is looking for saved Articles')
        return axios.get('/api/saved').then(function(response) {

            console.log('I was saved');
            return response;

        });



    },
    deleteInHelpers: function(idTodelete) {

        console.log('Delete this ID')
        console.log(idTodelete)

        return axios.delete(`/api/saved/${idTodelete}`).then(function(response) {

            console.log('I was Deleted');
            // console.log(response.data);

        });
    }


}
module.exports = helpers;