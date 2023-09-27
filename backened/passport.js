const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID="84282587711-6vv8l9h2tpll2jrhab06be7qnvvgl7ii.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
    done(null,profile)
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
}); //added

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});//added




