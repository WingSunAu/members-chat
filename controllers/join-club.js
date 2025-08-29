const db = require("../db/queries");

async function updateMemberGet(req, res) {
    res.render("join-club-form");
}

async function updateMemberPost(req, res) {
    // USE PASSPORT FOR VERIFICATION
    // USE COOKIES AND SESSION TO RETRIEVE CURRENT USER INFO FOR UPDATE USER
    if (req.cpw = "1") {
        db.updateUser(1, "joey", "salago", "romano", true);
    }
    res.redirect("/");
}

module.exports = {
    updateMemberGet,
    updateMemberPost

};
