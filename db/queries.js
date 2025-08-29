const pool = require("./pool");

/* 
USERS
CREATE TABLE IF NOT EXISTS users(
  userid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ),
    un VARCHAR (255),
    pw VARCHAR (255),
    isMember BOOL
);

MESSAGES
CREATE TABLE IF NOT EXISTS messages(
  messageid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    userid INTEGER REFERENCES users (userid),
    title VARCHAR (255),
    message VARCHAR (255),
    date VARCHAR (255)
);
*/

async function getAllUsers() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}

async function insertUser(name, un, pw) {
    await pool.query("INSERT INTO users (name, un, pw, ismember) VALUES ($1, $2, $3, $4)", [name, un, pw, false]);
}

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(userid, title, message, date) {
    await pool.query("INSERT INTO messages (userid, title, message, date) VALUES((SELECT userid from users WHERE userid = $1), $2, $3, $4)", [userid, title, message, date]);
}

async function updateUser(userid, name, un, pw, isMember) {
    await pool.query("UPDATE users set (name, un, pw, isMember) = ($1, $2, $3, $4) WHERE userid = " + userid, [name, un, pw, isMember]);
}

async function getAllSessions() {
    const { rows } = await pool.query("SELECT * FROM sessions");
    return rows;
}

async function findUser(un) {
    const { rows } = await pool.query("SELECT * FROM users WHERE un = $1", [un]);
    return rows;
}

async function findUserByUserId(userid) {
    const { rows } = await pool.query("SELECT * FROM users WHERE userid = $1", [userid]);
    return rows;
}

module.exports = {
    getAllUsers,
    insertUser,
    getAllMessages,
    insertMessage,
    updateUser,
    getAllSessions,
    findUser,
    findUserByUserId
};

