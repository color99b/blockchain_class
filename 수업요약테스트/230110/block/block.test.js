const Block = require("./block");
const merkle = require("merkle");
describe("Block Test", () => {
  it("merkle Test", () => {
    //merkleRoot 확인
    const data = ["a", "b", "c"];
    const block = new Block(data);
    const merkleRoot = merkle("sha256").sync(data).root();
    expect(block.merkleRoot).toBe(merkleRoot);
  });

  it("hash test", () => {
    //hash 확인
    const data = ["a", "b", "c"];

    const block1 = new Block(data);
    const block2 = new Block(data, block1);

    const hash = Block.createHash(block2);

    expect(block2.hash).toBe(hash);
  });
});
