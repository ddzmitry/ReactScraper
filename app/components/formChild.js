// Include React
var React = require("react");

// Here we include all of the sub-components
var Articles = require("./Articles");

// Requiring our helper for making API calls


// Create the Parent Component
var FormChild = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      searchTerm : '',
      startYear: '',
      endYear:'',
      totals:''

    };
  },

  componentDidMount: function() {
    console.log("COMPONENT MOUNTED");
  },
  // Whenever our component updates, the code inside componentDidUpdate is run
  componentDidUpdate: function(prevState) {

      console.log('I was updated')
  },
  checkChange: function(event){
    event.preventDefault();

    console.log(event.target.value)
    // id of field
    console.log(event.target.id)
    // we set a value as a key for new state
        let updatedState = {};
    updatedState[event.target.id] = event.target.value;
    this.setState(updatedState);
  },
  funcionSearch : function(event){
    event.preventDefault();
    console.log(this.state);

    // sending form data to the parent element
      this.props.sendfromForm(this.state);

  },
  // Here we render the function
  render: function() {
    return (

      <div>
<form role="form" onSubmit={this.funcionSearch}>
		
					  <div className="form-group">
					    <label htmlFor="search">Search Term:</label>
					    <input type="text" className="form-control" onChange={this.checkChange} value={this.state.searchTerm} id="searchTerm"/>
					  </div>
			
					  <div className="form-group">
					    <label htmlFor="startYear">Start Year :</label>
					    <input type="text" className="form-control" onChange={this.checkChange} value={this.state.startYear} id="startYear"/>
					  </div>

		
					  <div className="form-group">
					    <label htmlFor="endYear">End Year :</label>
					    <input type="text" className="form-control" onChange={this.checkChange} value={this.state.endYear} id="endYear"/>
					  </div>

	
					  <button type="" onChange={this.checkChange}  onClick={this.funcionSearch} className="btn btn-default" id="runSearch"> Search</button>

					</form>
                    <Articles articledata = {this.state.totals} />
                  
          </div>
    );
  }
});

// Export the component back for use in other files
module.exports = FormChild;
