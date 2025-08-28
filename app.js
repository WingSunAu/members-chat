const express = require("express");
const session = require("express-session");
const passport = require("passport");
const path = require("node:path");
const pool = require("./db/pool");
const indexRouter = require("./routes/indexRouter");
// check if need to also include separately in router, might not since router is used in app.js
require('./config/passport');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "cats",
    resave: false,
    // set to true to show (and save to store) all (including empty/unmodified session objects)
    saveUninitialized: true,
    store: new (require('connect-pg-simple')(session))({
        pool: pool,
        createTableIfMissing: true,
        tableName: 'sessions',
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}));
app.use(passport.session());
app.use('/', indexRouter);

app.listen(3000, (error) => {
    if (error) {
        throw error;
    }
    console.log("app listening on port 3000!");
});
