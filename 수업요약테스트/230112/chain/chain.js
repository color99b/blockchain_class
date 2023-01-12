const Block = require("../block/block");

class Chain {
  // 체인은 배열로 만들거다.
  //
  #chain;
  //난이도를 통해서 문제를 풀게 되고 문제 해결된 블록을 체인에 추가하게 된다.
  // 문제 풀이 과정을 마이닝이라고 한다,
  // 왜 문제 풀이를 하는가? 블록의 생성 시간을 조절하기 위해서
  // 결국 난이도는 블록의 생성 시간을 조절하기 위해서 높아졌다가 낮아졌다가 하게된다.
  // 난이도 조절에 대한 조건들을 설정하자
  #DIFFICULTY_ADJUSTMENT_INTERVAL = 10;
  // 전부 대문자로 변수명을 적는 이유 : 얘는 상수다. 무조건적인 건 아님.
  // 난이도 조절을 결정하는 블록의 개수(난이도 조절 단위 개수)
  // 블록이 10개 생성될 때마다 난이도를 조절한다.
  #BLOCK_GENERATION_INTERVAL = 10;
  // 블록 하나당 생성에 걸리는 시간(블록당 생성 시간)
  // 10개는 위에서 설정한 수(DIFFICULTY_ADJUSTMENT_INTERVAL)
  // 여기에 시간 단위는 없다.
  #TIME_UNIT = 60 * 1000;
  // 시간의 단위 설정
  // 60s * 1000ms => 1m (1분)

  constructor() {
    this.#chain = [];
    const genesis = new Block([`제네시스 블록 ${new Date()}`]);

    this.#chain.push(genesis);
  }
  get chain() {
    return [...this.#chain];
    //외부에서 #chain 접근 시 새로운 배열을 만들어서 반환한다.
  }
  get latestBlock() {
    return this.#chain[this.#chain.length - 1];
  }
  get config() {
    return {
      DAI: this.#DIFFICULTY_ADJUSTMENT_INTERVAL,
      //난이도 조절 단위 개수
      averageGenerationTime: this.#BLOCK_GENERATION_INTERVAL * this.#TIME_UNIT,
      // 10개 블록 생성되는 시간
    };
  }

  get adjustmentBlock() {
    const length = this.#chain.length;
    //현재 체인의 길이
    const interval = length - this.#DIFFICULTY_ADJUSTMENT_INTERVAL;
    //난이도 조절 단위 개수 전 index
    if (interval < 0) {
      return this.#chain[0];
    }
    return this.#chain[interval];
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    // 제네시스 블럭 후 9개의 블럭이 추가됐다.
    // 10이 추가될 때 난이도를 수정하게 된다.
    // ...20 해서 20일때 10index의 블럭
  }

  addBlock(_data) {
    const newBlock = new Block(
      _data,
      this.latestBlock,
      this.adjustmentBlock,
      this.config
    );
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

const chain = new Chain();
for (let i = 0; i < 32; i++) {
  chain.addBlock([`test block ${i}`]);
}
console.log(chain.chain);

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
