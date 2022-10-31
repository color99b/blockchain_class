"use strict";
//엄격모드 : ES6 안됨, var 안됨

// DB의 Table 에 관련해서 전부 관리한다. model 폴더 자체가
// MVC -> Model, View, Controller 프로그래밍의 기초
// View : 보이는 것, Controller : 조작, 통제 , Model : 저장
const Sequelize = require("sequelize");
// sequelize :
// DB에 연결하는데 무슨 db든 다 가능하다.

// mysql2 : DB에 연결한다.
const Table1 = require("./table1.js");
const Table2 = require("./table2.js");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = { Table1, Table2 };

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

Table1.init(sequelize);
Table2.init(sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
