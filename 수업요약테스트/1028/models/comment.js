const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: { type: Sequelize.STRING(20), allowNull: false },
        text: { type: Sequelize.TEXT, allowNull: false },
      },
      {
        sequelize,
        timestamps: true,
        underscored: true,
        modelName: "Comment",
        tableName: "comment",
        paranoid: true,
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    db.Comment.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
    db.Comment.belongsTo(db.Board, { foreignKey: "board_id", targetKey: "id" });
  }
};
