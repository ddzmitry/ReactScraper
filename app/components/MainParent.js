// Include React
var React = require("react");
var helpers = require("../utils/helpers");

var Main = React.createClass({

      getInitialState: function() {
    return {
      searchTerm : '',
      startYear: '',
      endYear:'',
      totals:''

    };


  },

  render: function() {
    return(
            <div>
                    
                    
                 <a href="#/form"><button className="btn btn-info">Form</button></a>
                <a href="#/saved"><button className="btn btn-info">Saved</button></a>
                      {this.props.children}
            </div>
               
            )



  }
});

// Export the component back for use in other files
export default Main;
