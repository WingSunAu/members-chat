const db = require("../db/queries");

async function createUserGet(req, res) {
    res.render("sign-up-form");
}

async function createUserPost(req, res) {
    try {
        db.insertUser(req.body.name, req.body.un, req.body.pw, req.body.isMember);
        res.redirect("/");
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    createUserGet,
    createUserPost,

};
