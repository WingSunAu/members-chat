const passport = require('passport');
const { findUser, findUserByUserId } = require('../db/queries');
const LocalStrategy = require('passport-local').Strategy;

const customFields = {
    usernameField: 'un',
    passwordField: 'pw'
};

const verifyCallback = (un, pw, done) => {
    try {
        const rows = findUser(un);
        const user = rows[0];

        if (!user) {
            return done(null, false, { message: "Incorrect username" });
        }
        if (user.pw !== pw) {
            return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

// express session

// put userid into session
passport.serializeUser((user, done) => {
    done(null, user.userid);
});

// grab userid from session and find in database to take out of session
passport.deserializeUser((userid, done) => {
    try {
        const rows = findUserByUserId(userid);
        const user = rows[0];

        done(null, user);
    } catch (err) {
        done(err);
    }
});