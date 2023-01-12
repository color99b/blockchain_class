const Chain = require("./chain");
const Block = require("../block/block");

describe("chain test", () => {
  let chain;
  beforeEach(() => {
    //다른 테스트를 실행하기 전에 실행하는 메서드
    chain = new Chain();
  });

  describe("addBlock test", () => {
    it("데이터로 블록 추가 확인", () => {
      //it이 시작하기 전에 위에서 설정된 beforeEach가 실행된다.

      chain.addBlock(["정상적인 데이터"]);

      expect(chain.chain).toHaveLength(2);
    });

    it("잘못된 데이터로 블록 추가 확인", () => {
      chain.addBlock("잘못된 데이터");

      expect(chain.chain).toHaveLength(1);
    });
  });

  describe("add2Chain", () => {
    it("블록생성 후 추가 확인", () => {
      const newBlock = new Block(["asdf"], chain.latestBlock);
      chain.add2Chain(newBlock);
      expect(chain.chain).toHaveLength(2);
    });

    it("잘못된 블록 생성 후 추가 확인", () => {
      //이전 블록이 없다 -> 제네시스 블록이다.
      const newBlock = new Block(["asdf"]);
      chain.add2Chain(newBlock);
      expect(chain.chain).toHaveLength(1);
    });
  });

  describe("latestBlock check", () => {
    it("마지막 블록 확인", () => {
      chain.addBlock(["asdf"]);
      const newBlock = new Block(["qwer"], chain.latestBlock);
      chain.add2Chain(newBlock);
      expect(chain.latestBlock).toEqual(newBlock);
    });
  });
});
