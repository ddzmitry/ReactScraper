// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Click schema
var Article = require("./models/articleSchema");

// Create a new express app
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3333;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var db = process.env.MONGODB_URI || "mongodb://localhost/nytimes";

// Connect
mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  }
  else {
    console.log("Ready to serve! ");
  }
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent click data.
// We will call this route the moment our page gets rendered
app.get("/api/saved", function(req, res) {

    // This GET request will search for the latest clickCount
    Article.find({}).exec(function(err, doc) {

        if (err) {
            console.log(err);
        } else {
            res.send(doc);
        }
    });
});

// This is the route we will send POST requests to save each click.
// We will call this route the moment the "click" or "reset" button is pressed.
app.post("/api/saved", function(req, res) {
    // here is ourArticle that needs to be saved

    console.log(req.body)
        // Here we will post something to our DB
    console.log("I will post here to MOngoDB")

    Article.create(req.body, function(err, data) {

        if (err) {
            console.log(err)

        } else {
            console.log(data);
            //here we send our data back to the front end so wecan render it 
            //and see succesfull insert'

            res.send(data);
        }
    })

});

app.delete("/api/saved/:id", function(req, res) {
    // here is ourArticle that needs to be saved

    console.log(req.params.id);
    // Here we will post something to our DB
    console.log("I will delete from MongoDB");

    Article.remove({ _id: `${req.params.id}` }, function(err, data) {

        if (err) {
            console.log(err);
        }

        res.send(data);
    })

});

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});