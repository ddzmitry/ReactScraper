// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the main Parent Component
// var Saved = require("./components/savedComponents");
// var Main = require("./components/maintComponent");
var Routes = require("./routes/routes.js");

// var Main2 = require("./components/MainParent.js")


// This code here allows us to render our main component (in this case Parent)
ReactDOM.render( Routes, document.getElementById("app"));