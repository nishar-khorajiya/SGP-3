const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport= require('passport');
const GOOGLE_CLIENT_ID="84282587711-91qkj3gddd3bfti247dhpb99d4am991c.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
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
}); 

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});




