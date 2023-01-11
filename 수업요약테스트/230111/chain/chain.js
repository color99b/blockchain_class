const Block = require("../block/block");

class Chain {
  // 체인은 배열로 만들거다.
  //
  #chain;

  constructor() {
    this.#chain = [];
    const genesis = new Block([`제네시스 블록 ${new Date()}`]);
    console.log(new Date());
    this.#chain.push(genesis);
  }
  get chain() {
    return [...this.#chain];
    //외부에서 #chain 접근 시 새로운 배열을 만들어서 반환한다.
  }
  get latestBlock() {
    return this.#chain[this.#chain.length - 1];
  }
  addBlock(_data) {
    const newBlock = new Block(_data, this.latestBlock);
    // this.#chain.push(newBlock);
    //제네시스 블록만 있을 때 체인의 길이는 1
    // - 제네시스 블록의 인덱스 = 0;
    // 블록 하나를 추가한다.
    // - 체인의 길이 : 2
    // - 제네시스 블록의 인덱스 = 0;
    // - 제네시스 블록의 다음 블록의 인덱스 = 1;
    // const isVaild = Block.isVaildBlock(newBlock, this.latestBlock);
    // if (isVaild.isError) {
    //   console.error(isVaild.msg);
    //   return null;
    // } else {
    //   this.#chain.push(newBlock);
    //   return newBlock;
    // }
    return this.add2Chain(newBlock);
  }
  // 현재 체인이 [1,2,3] => 4번 블록을 추가한다.
  // 4번 블록은 3번 블록을 알고 있어야한다. (previousHash)
  // chain 기준으로 2번 index의 블록 -> length - 1;

  add2Chain(_newBlock) {
    const isVaild = Block.isVaildBlock(_newBlock, this.latestBlock);
    if (isVaild.isError) {
      console.error(isVaild.msg);
      return null;
    } else {
      this.#chain.push(_newBlock);
      return _newBlock;
    }
  }
}

// const chain = new Chain();
// // console.log(chain.chain);
// const block = new Block(["qwer"], chain.latestBlock);
// console.log(block);
// block.height = 4;
// chain.addBlock(["asdf"]);
// chain.addBlock(["asd3"]);
// chain.addBlock(["asdf2"]);
// chain.add2Chain(block);
// console.log(chain.chain);

// const a = [];
//  a=> 어떤 위치에 []이라는 값을 넣었다. 그 어떤 위치의 이름이 a다

// const b = a;
// b.push("asdf");
// console.log(a);

module.exports = Chain;
