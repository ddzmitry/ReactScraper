// Include React
var React = require("react");
var helpers = require("../utils/helpers");
// Here we include all of the sub-components
// var GrandChild = require("./GrandChild");

// Create the Child Component
var Saved = React.createClass({

      getInitialState: function() {
    return {
        savedData: []

    };
  },
    componentDidMount() {
            // and we do our call to axios to get data
            helpers.findSavedData().then(function(data){
            
            // we get our array of saved articles

            console.log(data.data);
            let uewState = {}
            uewState['savedData'] = data.data
            this.setState(uewState)
            console.log(this.state)

            }.bind(this))
        },
        
  displayArticles: function(){
    return this.state.savedData.map(function(artcle,index){

        return (
              // key has to be here it the law lol)
              <div key={index} data-id ="{article._id}" >
              
                <h3>{artcle.headline}</h3>
                <h4>{artcle.snippet}</h4>
                 <a href={artcle.link} target="_blank"> <button>Link On Artcle </button> </a>
                  <button onClick ={() => this.deleteTheArticle(artcle)}>Delete The Article</button>
            </div>

        )


    }.bind(this))

  },
  deleteTheArticle: function(event){

        console.log(event._id)

        helpers.deleteInHelpers(event._id).then(function(responce){

                console.log(responce)
                            helpers.findSavedData().then(function(data){
            
            // we get our array of saved articles

            console.log(data.data);
            let uewState = {}
            uewState['savedData'] = data.data
            this.setState(uewState)
            console.log(this.state)

            }.bind(this))

              
        }.bind(this))
  },
  
  render: function(){

 

                  return (
          <div>
            <div>{this.displayArticles()}</div>
          </div>
    );

  }
});

// Export the component back for use in other files
module.exports = Saved;
