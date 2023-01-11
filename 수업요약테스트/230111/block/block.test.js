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
});
