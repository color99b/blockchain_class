const Block = require("./block");
const merkle = require("merkle");
describe("Block Test", () => {
  // it("merkle Test", () => {
  //   //merkleRoot 확인
  //   const data = ["a", "b", "c"];
  //   const block = new Block(data);
  //   const merkleRoot = merkle("sha256").sync(data).root();
  //   expect(block.merkleRoot).toBe(merkleRoot);
  // });

  // it("hash test", () => {
  //   //hash 확인
  //   const data = ["a", "b", "c"];

  //   const block1 = new Block(data);
  //   const block2 = new Block(data, block1);

  //   const hash = Block.createHash(block2);

  //   expect(block2.hash).toBe(hash);
  // });

  describe("data가 배열이 아닐 때", () => {
    const data = "a";
    const block = new Block(data);
    it("merkleRoot가 비어있는가", () => {
      expect(block.merkleRoot).toBe("");
    });
    it("hash가 비어있는가", () => {
      expect(block.hash).toBe("");
    });
  });

  describe("data가 배열일 때", () => {
    const data = ["a"];
    const block = new Block(data);
    it("merkleRoot가 정상인가", () => {
      const merkleRoot = merkle("sha256").sync(data).root();
      expect(block.merkleRoot).toBe(merkleRoot);
    });
    it("hash와 merkleRoot의 길이가 64인가", () => {
      expect(block.merkleRoot).toHaveLength(64);
      expect(block.hash).toHaveLength(64);
      //toHaveLength : 길이확인
    });
  });

  describe("difficulty check", () => {
    const data = [`a`];
    const block = new Block(data);
    let tempDifficultyOptions;

    beforeEach(() => {
      tempDifficultyOptions = {
        previousDifficulty: 9,
        adjustmentDifficulty: 10,
        adjustmentTimestamp: Date.now(),
        DAI: 10,
        averageGenerationTime: 60 * 1000,
      };
      block.height = 30;
    });

    it("높이가 0~9까지 난이도는 0인가?", () => {
      for (let i = 0; i < 10; i++) {
        block.height = i;
        block.getDifficulty(tempDifficultyOptions);
        //난이도를 재설정한다.
        expect(block.difficulty).toBe(0);
        //그 난이도가 0인가?
      }
    });

    it("높이가 10~19까지 난이도는 1인가?", () => {
      for (let i = 10; i < 20; i++) {
        block.height = i;
        block.getDifficulty(tempDifficultyOptions);
        //난이도를 재설정한다.
        expect(block.difficulty).toBe(1);
        //그 난이도가 1인가?
      }
    });

    it("기준 시간보다 빠르게 생성되었을 경우 난이도를 높이는가?", () => {
      tempDifficultyOptions.adjustmentTimestamp -= 20 * 1000;
      //10개 전 블록이 1분(60 * 1000) 전에 생성되었다.
      block.getDifficulty(tempDifficultyOptions);
      expect(block.difficulty).toBe(
        tempDifficultyOptions.adjustmentDifficulty + 1
      );
      //10개 전 블록의 난이도에 1이 추가 되었는가.
    });
  });
});
