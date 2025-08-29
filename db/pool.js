const { Pool } = require("pg");

// Again, this should be read from an environment variable
module.exports = new Pool({
    connectionString: "postgresql://members_chat_user:6feyKISJe5RXfH9DDZOWR0c2LJuZBrUC@dpg-d2oh2ba4d50c739u5a7g-a/members_chat"
});
