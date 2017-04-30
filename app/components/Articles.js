// Include React
var React = require("react");
var helpers = require("../utils/helpers");
// Here we include all of the sub-components
// var GrandChild = require("./GrandChild");

// Create the Child Component
var Child = React.createClass({

  // Child has a state that follows the number of clicks
  getInitialState: function() {
    return {
      text: '',
      header:'',
      link: ''
    };

  },
  displayArticles: function(){


    return this.props.resultArray.map(function(artcle,index){

        return (
              // key has to be here it the law lol)
              <div key={index}>
              
                <h3>{artcle.headline.main}</h3>
                <h4>{artcle.lead_paragraph}</h4>
                 <a href={artcle.web_url} target="_blank"> <button className="btn btn-info">Link On Artcle </button> </a>
                  <button className="btn btn-info" onClick ={() => this.saveMeInDB(artcle)}>Save The Article</button>
                <p>{artcle.pub_date}</p>
            </div>

        )


    }.bind(this))
    
  },
  saveMeInDB: function(articleToSave){
        // event.preventDefault();
        // console.log(articleToSave.headline.main);
        // console.log(articleToSave.lead_paragraph);
        // console.log(articleToSave.web_url);
        //saving article
        helpers.saveArticle(articleToSave.headline.main,articleToSave.lead_paragraph,articleToSave.web_url)


        // here we will fire our funciton to save the article 
  },
  render: function() {

      if(!this.props.resultArray){
          //if we dont have any data
        return( <div>
              <h4>We Will find you something soon.....</h4>
        </div>) 
      } 
      
      else {
          // if we have data from props
      return (
          <div>
            <div>{this.displayArticles()}</div>
          </div>
    );
      }




  }
});

// Export the component back for use in other files
module.exports = Child;
