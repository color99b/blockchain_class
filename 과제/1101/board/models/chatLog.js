const Sequelize = require("sequelize");

module.exports = class chatLog extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        who: {
          type: Sequelize.STRING(10),
        },
        text: {
          type: Sequelize.STRING(100),
        },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        paranoid: false,

        modelName: "chatLog",
        tableName: "chatLog",
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }

  static associate(db) {}
};
