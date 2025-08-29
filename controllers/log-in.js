const db = require("../db/queries");

async function readUserGet(req, res) {
    res.render("log-in-form");
}

async function readUserPost(req, res) {
    // IMPLEMENT WITH PASSPORT
}

module.exports = {
    readUserGet,
    readUserPost
};
