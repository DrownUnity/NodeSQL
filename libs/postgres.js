const { Client } = require("pg");

async function getConnection() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "user",
    password: "admin123",
    database: "my_store"
  });

  try {
    await client.connect();
    console.log("Connected to PostgreSQL");
    return client;
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error.message);
    throw error; // rethrow the error to be handled by the caller
  }
}

module.exports = getConnection;
