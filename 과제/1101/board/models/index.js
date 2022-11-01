"use strict";

const chatLog = require("./chatLog.js");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = { chatLog };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
chatLog.init(sequelize);
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
