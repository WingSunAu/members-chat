#! /usr/bin/env node

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS users(
  userid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR ( 255 ),
    un VARCHAR (255),
    pw VARCHAR (255),
    isMember BOOL
);

INSERT INTO users (name, un, pw, isMember) 
VALUES
  ('Bryan', 'Bgoogy', 'oopy', True),
  ('Odin', 'oPoopy', 'shuushy', false),
  ('Damon', 'dDoody', 'oopsie', True
);


CREATE TABLE IF NOT EXISTS messages(
  messageid INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    userid INTEGER REFERENCES users (userid),
    title VARCHAR (255),
    message VARCHAR (255),
    date VARCHAR (255)
);

INSERT INTO messages (userid, title, message, date) 
VALUES
  ((SELECT userid from users WHERE userid = 1), 'Bgoogy post', 'im bgoogy', '1/23/2025'),
  ((SELECT userid from users WHERE userid = 2), 'oPoopy post', 'go shuushy', '1/23/2025'),
  ((SELECT userid from users WHERE userid = 3), 'dDoody post', 'oh my oopsie', '1/23/2025'
);
 `
  ;

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
