const db = require("../db/queries");
const bcrypt = require("bcryptjs");

async function createUserGet(req, res) {
    res.render("sign-up-form");
}

async function createUserPost(req, res, next) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.pw, 10);
        db.insertUser(req.body.name, req.body.un, hashedPassword);
        res.redirect("/");
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    createUserGet,
    createUserPost,

};
