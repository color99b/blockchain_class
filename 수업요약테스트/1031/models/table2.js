const Sequelize = require("sequelize");

module.exports = class Table2 extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        column3: {
          type: Sequelize.STRING(255),
        },

        column4: {
          type: Sequelize.BOOLEAN(10),
        },
      },
      {
        sequelize,
        timestamps: false, // created_at, updated_at을 자동으로 추가한다.
        underscored: true, // 카멜을 스네이크로 바꾼다. << createdAt -> created_at
        paranoid: true, // deleted_at을 추가한다.
        // 데이터를 삭제했을 때 DB에서 아예 없앨건지, 아니면 남길건지 결정해라 << true면 남긴다. -> deleted_at이 추가된다.
        modelName: "Table2", // Javascript에서 사용하는 이름
        tableName: "table2", // DB에 생성되는 테이블 이름
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
  static associate(db) {
    // 관계를 위한 메서드
    db.Table2.belongsTo(db.Table1, {
      //table1이 table2를 가지고 있다.
      foreignKey: "table1_column2",
      // 연결하는 키
      targetKey: "column2",
      // 상대한테 받아올 키
    });

    // n:m
    //다른 테이블과 연결되어야 익숙하다?
    //같은 테이블과 연결되어야 익숙하다 -> 친구추가 => user : user

    db.Table2.belongsToMany(db.Table2, {
      through: "link_table2",
      //어떠한 테이블명을 만들지
      as: "Table2s",
    });
  }
};
