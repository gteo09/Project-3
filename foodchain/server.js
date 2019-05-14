// Requiring necessary npm packages
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");
// Requiring mysql
const mysql = require("mysql");
require('./routes/html-routes');
//
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");
//
// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
//
// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
//
// Connecting to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Reinhole87!',
  database: 'passport_demo'
});

connection.connect(function(err) {
  (err)? console.log(err): console.log(connection);
});

// Syncing our database and logging a message to the user upon success - Uncomment to see error in terminal
// db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
// });