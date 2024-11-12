const reportModel = require("./reportModel");
const userModel = require("./userModel");
exports.initializeDatabase = async () => {
  await userModel.createTable();
  await reportModel.createTable();
};
