// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
//
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
//
// Requiring mysql
const mysql = require("mysql");
//
module.exports = function(app, connection) {
//
  app.get('/', function(req, res) {
    connection.query('SELECT * FROM user_info', function(err, data) {
      (err)? res.send(err): res.json({user_info: data});
    });
  }); 
    
  // OPTION 2  // If the user already has an account send them to the members page
  // app.get("/", function(req, res) {
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });
//
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
//
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be 
  //redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
};