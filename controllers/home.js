const db = require("../db/queries");

// async function getUsers(req, res) {
//     const users = await db.getAllUsers();
//     const messages = await db.getAllMessages();
//     console.log("USERS: \n", users);
//     console.log("MESSAGES: \n", messages);
//     res.render("index", { users: users });
// }
async function getMessages(req, res) {
    const users = await db.getAllUsers();
    const messages = await db.getAllMessages();
    const sessions = await db.getAllSessions();
    console.log("USERS: \n", users);
    console.log("MESSAGES: \n", messages);
    console.log("SESSIONS: \n", sessions);
    res.render("index", { messages: messages });
}
module.exports = {
    getMessages
};