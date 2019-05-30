// Requiring necessary npm packages
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const userRouter = require('./routes/api-routes');
const cors = require("cors");
// Requiring passport as we've configured it
var passport = require("passport");

const flash = require("connect-flash");
// Requiring mysql
const mysql = require("mysql");
// require('./routes/html-routes');
//
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");
//
// Creating express app and configuring middleware needed for authentication
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ 
  secret: "justasecret", 
  resave: true, //might need to change
  saveUninitialized: true 
}));

app.use(cors());
app.options("*", cors());

app.use(userRouter)
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//
// Requiring our routes
require("./routes/html-routes.js")(app);
require("./config/passport")(passport);
// require("./routes/api-routes.js")(app);




var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Syncing our database and logging a message to the user upon success - Uncomment to see error in terminal
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", 
      PORT, 
      PORT
      );
  });
});