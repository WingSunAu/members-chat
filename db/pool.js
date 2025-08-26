const { Pool } = require("pg");

// Again, this should be read from an environment variable
module.exports = new Pool({
    connectionString: "postgresql://wing:wing@localhost:5432/members_chat"
});
