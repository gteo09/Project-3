var User = require("../models/user");

//we import passport packages required for authentication
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
//
const bcrypt = require("bcrypt-nodejs");
// const dbconfig = require("./database");
// const connection = mysql.createConnection(dbconfig.connection);
const connection = require("./database");
const db = require("../models");
//
// module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    connection.query("SELECT * FROM users WHERE id = ? ", [id],
    function(err, rows) {
      done(err, rows[0]);
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy({
      usernameField : "username",
      passwordField : "password",  
      passReqToCallback : true
    },
    function(req, username, password, done) {
      console.log(req.body);
      connection.query("SELECT * FROM Users WHERE username = ? ",
      [username], function(err, rows) {
        if(err)
        return done(err);
        if(rows.length) {
          return done(null, false, req.flash("signupMessage", "That is already taken"));
        } else {
          var newUserMysql = {
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, null, null)
          };

          db.Users.create(newUserMysql).then((user) => {
            console.log(user);
            return done(null, user);
          })
          // var insertQuery = "INSERT INTO new (username, email, password) values (?, ?, ?)";

          // connection.query(insertQuery, [newUserMysql.username, newUserMysql.email, newUserMysql.password],
          //   function(err, rows) {
          //     console.log(err,rows);
          //     newUserMysql.id = rows.insertId;

          //     return done(null, newUserMysql);
          //   });
          // }
        }
        });
      })
    )

    passport.use(
      "local-login",
      new LocalStrategy({
        usernameField : "username",
        passwordField : "password",
        passReqToCallback : true
      },
      function(req, username, password, done) {
        console.log(username);
        connection.query("SELECT * FROM users WHERE username = ? ", [username],
        function(err, rows) {
          console.log(rows[0]);
          if(err) {
          return done(err);
          }
          if(!rows.length){
            return done(null, false, req.flash("loginMessage", "No User Found"));
          }
          console.log(!bcrypt.compareSync(password, rows[0].password));
          if (!bcrypt.compareSync(password, rows[0].password)) {
            console.log(password);
            return done(null, false, req.flash("loginMessage", "Wrong Password"));
          }
      
          return done(null, rows[0]);
        });
      })
    );
    
    // passport.use(new LocalStrategy(
    //   function(username, password, done) {
    //     User.findOne({ username: username }, function (err, user) {
    //       if (err) { return done(err); }
    //       if (!user) { return done(null, false); }
    //       if (!user.verifyPassword(password)) { return done(null, false); }
    //       return done(null, user);
    //     });
    //   }
    // ));
  
  module.exports = passport;