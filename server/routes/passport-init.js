const mongoose = require('mongoose');
const User = mongoose.model('User');
const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt-nodejs');
module.exports = function (passport) {

  passport.serializeUser(function (user, done) {
    console.log('serializing user:', user._id);
    return done(null, user._id);
  });

  passport.deserializeUser(function (id, done) {

    User.findByID(id).then(function (user) {
      if (!user) {
        return done('User not found', false);
      }
      return done(user, true);

    })
      .catch((err) => {
        return done(err, false)
      })
  });
  passport.use('login', new LocalStrategy({
      passReqToCallback: true
    },
    function (req, username, password, done) {

      User.findOne({'username': username}).then(function (user) {
        if (!user) {
          console.log('User Not Found with username ' + username);
          return done(null, false);
        }
        if (isValidPassword(user)) {

          return done(null, user);
        } else {
          console.log('Invalid password ' + username);
          return done(null, false)
        }
      }).catch((err) => {
        return done(err, false)
      });
    }
  ));

  passport.use('signup', new LocalStrategy({
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function (req, username, password, email, done) {
      User.findOne({'username': username}).then(function (user) {
        if (user) {
          console.log('User already exists with username: ' + username);
          return done(null, false);
        } else {
          let newUser = new User();
          newUser.email = email;
          newUser.username = username;
          newUser.password = createHash(password);
          newUser.save( ()=>{
            console.log(newUser.username + ' Registration successful');
            res.status(200).send(newUser);
          });
        }
      }).catch((err) => {
        console.log('Error in SignUp: ' + err);

      })
    })
  );

  const isValidPassword = (user, password) => {
    return bCrypt.compareSync(password, user.password);
  };

  const createHash = (password) => {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
  }
};
