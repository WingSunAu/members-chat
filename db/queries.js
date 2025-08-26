const pool = require("./pool");

async function getAllUsers() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}

async function insertUser(name, un, pw, isMember) {
    await pool.query("INSERT INTO users (name, un, pw, isMember) VALUES ($1, $2, $3, $4)", [name, un, pw, isMember]);
}

module.exports = {
    getAllUsers,
    insertUser
};
