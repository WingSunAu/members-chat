#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ),
    un VARCHAR (255),
    pw VARCHAR (255),
    isMember BOOL
);

INSERT INTO users (username) 
VALUES
  ('Bryan', 'Bgoogy', 'oopy', 1),
  ('Odin', 'oPoopy', 'shuushy', 0),
  ('Damon', 'dDoody', 'oopsie', 1);
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: "postgresql://wing:wing@localhost:5432/members_chat",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();
