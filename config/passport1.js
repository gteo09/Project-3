// var User = require("../models/user");

// //we import passport packages required for authentication
// var passport = require("passport");
// var LocalStrategy = require("passport-local").Strategy;
// //
// const bcrypt = require("bcrypt-nodejs");
// // const dbconfig = require("./database");
// // const connection = mysql.createConnection(dbconfig.connection);
// const connection = require("./database");
// const db = require("../models");
// //
// // module.exports = function(passport) {
//   passport.serializeUser(function(user, done) {
//     done(null, user.id);
//   });

//   passport.deserializeUser(function(id, done) {
//     connection.query("SELECT * FROM users WHERE id = ? ", [id],
//     function(err, rows) {
//       done(err, rows[0]);
//     });
//   });

//   passport.use(
//     "local-signup",
//     new LocalStrategy({
//       usernameField : "username",
//       passwordField : "password",  
//       passReqToCallback : true
//     },
//     function(req, username, password, done) {
//       console.log(req.body);
//       connection.query("SELECT * FROM users WHERE username = ? ",
//       [username], function(err, rows) {
//         if(err)
//         return done(err);
//         if(rows.length) {
//           return done(null, false, req.flash("signupMessage", "That is already taken"));
//         } else {
//           var newUserMysql = {
//             username: req.body.username,
//             email: req.body.email,
//             password: bcrypt.hashSync(req.body.password, null, null)
//           };

//           db.Users.create(newUserMysql).then((user) => {
//             console.log(user);
//             return done(null, user);
//           })
//           // var insertQuery = "INSERT INTO users (username, email, password) values (?, ?, ?)";

//           // connection.query(insertQuery, [newUserMysql.username, newUserMysql.email, newUserMysql.password],
//           //   function(err, rows) {
//           //     console.log(err,rows);
//           //     newUserMysql.id = rows.insertId;

//           //     return done(null, newUserMysql);
//           //   });
//           // }
//         }
//         });
//       })
//     )

//     passport.use(
//       "local-login",
//       new LocalStrategy({
//         usernameField : "username",
//         passwordField : "password",
//         passReqToCallback : true
//       },
//       function(req, username, password, done) {
//         console.log(username);
//         connection.query("SELECT * FROM users WHERE username = ? ", [username],
//         function(err, rows) {
//           console.log(rows[0]);
//           if(err) {
//           return done(err);
//           }
//           if(!rows.length){
//             return done(null, false, req.flash("loginMessage", "No User Found"));
//           }
//           console.log(!bcrypt.compareSync(password, rows[0].password));
//           if (!bcrypt.compareSync(password, rows[0].password)) {
//             console.log(password);
//             return done(null, false, req.flash("loginMessage", "Wrong Password"));
//           }
      
//           return done(null, rows[0]);
//         });
//       })
//     );

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
  // }
  // module.exports = passport;
 







// COMMENTED OUT - TRYING NEW VERSION
//We will need the models folder to check passport agains
// var db = require("../models");
// //
// // Telling passport we want to use a Local Strategy. In other words,
// //we want login with a username/email and password
// passport.use(new LocalStrategy(
//   // Our user will sign in using an email, rather than a "username"
//   {
//     usernameField: "email"
//   },
//   function(email, password, done) {
//     // When a user tries to sign in this code runs
//     db.User.findOne({
//       where: {
//         email: email
//       }
//     }).then(function(dbUser) {
//       // If there's no user with the given email
//       if (!dbUser) {
//         return done(null, false, {
//           message: "Incorrect email."
//         });
//       }
//       // If there is a user with the given email, but the password the user gives us is incorrect
//       else if (!dbUser.validPassword(password)) {
//         return done(null, false, {
//           message: "Incorrect password."
//         });
//       }
//       // If none of the above, return the user
//       return done(null, dbUser);
//     });
//   }
// ));
// //
// // In order to help keep authentication state across HTTP requests,
// // Sequelize needs to serialize and deserialize the user
// // Just consider this part boilerplate needed to make it all work
// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });
// //
// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });
// //
// // Exporting our configured passport
// module.exports = passport;