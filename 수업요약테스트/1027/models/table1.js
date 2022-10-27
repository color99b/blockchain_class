const Sequelize = require("sequelize");

module.exports = class Table1 extends Sequelize.Model {
  //static => class를 new하지 않고 메서드를 불러온다.
  //
  static init(sequelize) {
    return super.init(
      {
        idx: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
          allowNull: false,
        }, // index 값 자동증가
        name: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },

        // password: {
        //   type: Sequelize.STRING(256),
        //   allowNull: true,
        // },

        id: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        asd: {
          type: Sequelize.STRING(45),
          allowNull: true,
        },
        // create_at: {
        //   type: Sequelize.DATE,
        //   allowNull: true,
        //   defaultValue: Sequelize.NOW, //기본값으로 현재 시간
        // },
      },
      {
        sequelize,
        timestamps: false, //creatAt, updateAT 자동 추가
        underscored: true, // 테이블과 컬럼명을 카멜케이스로 수정
        modelName: "newTable", //js 에서 사용하는 테이블명
        tableName: "new_table", //  mysql에 있는 테이블명
        paranoid: false, //삭제시 deleteAt 을 저장할지 (영구삭제 vs 로그남기고 삭제)

        charset: "utf8mb4", //언어포맷
        collat: "utf8mb4_general_ci", //언어포맷
      }
    );
  }

  static associate(db) {
    // db.new_table
  }
};
