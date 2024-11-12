// config/db.js
const hana = require("@sap/hana-client");
require("dotenv").config();

const connection = hana.createConnection();

const connParams = {
  serverNode: process.env.DB_SERVER_NODE,
  uid: process.env.DB_UID,
  pwd: process.env.DB_PASSWORD,
  encrypt: true,
  sslValidateCertificate: false,
};

const connectDB = async () => {
  try {
    await new Promise((resolve, reject) => {
      connection.connect(connParams, (err) => {
        if (err) {
          reject(err);
        } else {
          console.log("HANA Database Connected Successfully");
          resolve();
        }
      });
    });
  } catch (error) {
    console.error("Error connecting to HANA Database:", error.message);
    process.exit(1);
  }
};

const getConnection = () => {
  if (!connection) {
    throw new Error("Database connection has not been established yet.");
  }
  return connection;
};

module.exports = { connectDB, connection, getConnection };
