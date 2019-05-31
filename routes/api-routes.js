// Requiring our models and passport as we've configured it
var db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
var mysql = require("mysql");
// var cors = require('cors');
const validateRegisterInput =  require("../validation/register")
const validateLoginInput = require("../validation/login")
const Users = require("../models/user")
const express = require("express");
const router = express.Router();
//
// module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

  // app.post("/api/login", passport.authenticate("local"), function(req, res) {
  //   // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  //   // So we're sending the user back the route to the members page because the redirect will happen on the front end
  //   // They won't get this or even be able to access this page if they aren't authed
  //   res.json("/members");
  // });

//
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
router.post("/api/register", (req, res)=> {
  console.log(req.body);

  const { errors, isValid } = validateRegisterInput(req.body);
  console.log(errors, isValid);
  
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Hash password before saving in database
  
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      console.log(hash, '<----- hash');
      
      console.log(err);
      
      if (err) throw err;

      const newUser = {
        username: req.body.username,
        email: req.body.email,
        password: hash,
        description: req.body.description,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        website: req.body.website
      };

      console.log(newUser);
      

      db.Users.create(newUser)

      // // newUsers.password = hash;
      // newUsers 
      //   .save()
        .then(newUsers => {
          console.log(newUsers)
          res.json(newUsers)
        })
        .catch(err => console.log(err));
    });
 
  // db.Users.create({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: req.body.password
  // }).then(function() {
  //   res.redirect(307, "/api/login");
  // }).catch(function(err) {
  //   console.log(err);
  //   res.json(err);
  //   // res.status(422).json(err.errors[0].message);
  // });
});

//

// Route for logging user out
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});
//
// Route for getting some data about our user to be used client side
router.get("/api/user_data", function(req, res) {
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



//route to login
router.post("/login",(req,res)=>{
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  console.log(req.body)

  db.Users.findOne({where:{email}}).then(user =>{
    console.log(user)
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      console.log("ismatch", isMatch)
      console.log(password, user.password);
      if (isMatch) {
        
        // User matched
        //Create JWT Payload
        const payload = {
        id: user.id,
        username: user.username,
        description: user.description,
        phoneNumber: user.phoneNumber,
        address: user.address,
        email: user.email,
        website: user.website
        };
        console.log(payload,"<-------------")

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } 
      
      else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    }
    );
  })
})

  
//route for getting all info from farms out of database
router.get("/api/allfarms", function(req, res){
  db.Farms.findAll().then(function(dbfarms){
    res.json(dbfarms)
  })
});

//route for getting info for farm with specific id
router.get("/api/allfarms/:id", function(req, res){
  db.Farms.findAll(
    {where:{
    id:req.params.id
  }}).then(function(farm){
    res.json(farm)
  });
});

//post route for updating your personal profile
router.post("/api/update/:id", function(req, res){
  db.ProfileInfo.findOneAndUpdate({id:req.parmams.id}, req.body)
  .then(dbInfo =>res.json(dbInfo))
  .catch(err=>(console.log(err)))
})


  router.get('/user', (req, res) => {
    db.Users.findAll({
      include: [
        {
          model: db.ProfileInfos
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
            ProfileInfos: user.ProfileInfos
          }
        )
      })
    }
    )
    res.json(resObj)
  });

  router.get("api/user/:id", (req, res)=>{
    db.Users.findOne({
      id: req.params.id
    }).then(data=>{
      return res.json(data)
    })
  })

  //------------------------------
  //trying out react/nodejs/sql tutorial
  // app.use(cors());

  // var connection= mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "",
  //   database: "passport_demo"
  // });
  
  // app.get('/first', (req, res) => {
  //   res.send('go to /profilepage to see profile')
  // });

  // //currently not workingb
  // app.get('/profilepage/add', (req, res) => {
  //   const { name, cuisine, description, address, phoneNumber, email} = req.query;
  //   const INSERT_PRODUCTS_QUERY = `INSERT INTO passport_demo.profileinfos (name, cuisine, description, address, phoneNumber, email) VALUES("${name}", ${cuisine}, ${description}, ${address}, ${phoneNumber}, ${email})`
  //   connection.query(INSERT_PRODUCTS_QUERY, (err, results) => {
  //     if(err) {
  //       return res.send(err)
  //     } else {
  //       return res.send("successfully added profile")
  //     }
  //   });
  //   res.send("adding profile");
  // });

  // //currently not working
  // app.get('/profilepage', (req, res) => {
  //   connection.query("SELECT * FROM passport_demo.profileinfos", (err, results) => {
  //     if(err) {
  //       return res.send(err)
  //     } else {
  //       return res.json({
  //         data: results
  //       })
  //     }
  //   })
  // }); 

  //------------------------------

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
  
  router.post("/submit", function(req, res) {
    console.log(req.body);
    db.ProfileInfos.create({
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
// };
module.exports = router;
