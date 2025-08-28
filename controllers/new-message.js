const db = require("../db/queries");

async function createMessageGet(req, res) {
    res.render("new-message-form");
}

async function createMessagePost(req, res) {
    messageDate = new Date().toDateString();
    // USER SESSIONS AND COOKIES TO ACCESS USERID
    userId = 1;
    db.insertMessage(userId, req.body.title, req.body.message, messageDate);
    res.redirect("/");
}

module.exports = {
    createMessageGet,
    createMessagePost
};
