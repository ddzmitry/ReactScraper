
var React = require("react");
var helpers = require("../utils/helpers");
var Articles = require('./Articles');
var FormChild = require('./formChild');

var Main = React.createClass({

  // GrandChild has a state that follows the number of clicks
  getInitialState: function() {
    return {
      data : []
    };


  },
  doResearch: function(data) {
    console.log('THIS IS MY DATA FROM CHOLDREN FORM')
    console.log(data)
    console.log('I am doing research boo')
    
        helpers.findArticles(data.searchTerm,data.startYear,data.endYear, function(data){
        console.log(data.data.response.docs)
        //set data for articles);
          let updatedState = {};
    updatedState['data'] = data.data.response.docs;
    this.setState(updatedState);
    console.log(this.state)

    }.bind(this));




  },
  render: function() {
    return (
          <div>
              <h1> Hello NY Times</h1>

                <FormChild  sendfromForm = {this.doResearch}/ >
                <Articles resultArray = {this.state.data}/>
          </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
