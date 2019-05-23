// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
var mysql = require("mysql");
//
module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
  });
//
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/register", function(req, res) {
    console.log(req.body);
    db.Users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

//

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });
//
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

//route for getting all info from farms out of database
app.get("/api/allfarms", function(req, res){
  db.Farms.findAll().then(function(dbfarms){
    res.json(dbfarms)
  })
});

//route for getting info for farm with specific id
app.get("/api/allfarms/:id", function(req, res){
  console.log("found log", req.params.id)
  db.Farms.findAll(
    {where:{
    id:req.params.id
  }}).then(function(farm){
    console.log("our farm",farm)
    res.json(farm)
  });
});

  app.get('/user', (req, res) => {
    db.Users.findAll({
      include: [
        {
          model: db.profileInfo
        }
      ]
    }).then(user=>{
      const resOBj = user.map(user=> {
        return Object.assign(
          {},
          {
            user_id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            profileInfo: user.profileInfo
          }
        )
      })
    }
    )
    res.json(resObj)
  });


  //posting user profile info to db
  // app.post("/api/profileinfo", function(req, res) {
  //   console.log(req.body);
  //   db.ProfileInfo.create({
  //     name: req.body.name,
  //     cuisine: req.body.cuisine,
  //     description: req.body.description,
  //     address: req.body.address,
  //     phoneNumber: req.body.phoneNumber,
  //     email: req.body.email,
  //   }).then(function() {
  //     res.redirect(307, "/api/profile");
  //   }).catch(function(err) {
  //     console.log(err);
  //     res.json(err);
  //     // res.status(422).json(err.errors[0].message);
  //   });
  // });

  var con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Reinhole87!",
    database: "passport_demo"
  });

  // app.post("/submit", function(req, res) {
  //   var name= req.body.name;
  //   var cuisine= req.body.cuisine;
  //   var description = req.body.description;
  //   var address = req.body.address;
  //   var phoneNumber = req.body.phoneNumber;
  //   var email = req.body.email;
  
  app.post("/submit", function(req, res) {
    console.log(req.body);
    db.ProfileInfo.create({
      name: req.body.name,
      cuisine: req.body.cuisine,
      description: req.body.description,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber, 
      email : req.body.email,
      UserId: req.body.userId
    }).then(function(newProfile) {
      res.json(newProfile);
    }).catch(function(err) {
      console.log(err);
      res.json(err);
    });
  });
};