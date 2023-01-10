const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;
class BlockHeader {
  #version;
  #merkleRoot;
  #timestamp;
  #difficulty;
  #nonce;
  #height;

  constructor(_data, _previousBlock) {
    //1-3
    this.#version = "1.0.0";
    this.#merkleRoot = _data
      ? merkle("sha256").sync(_data).root()
      : "0".repeat(64);
    this.setTimestamp();
    // Date << 클래스, now << static 정의된 메소드
    // 이후에 체인에 블록을 추가하는 시점으로 블록생성 시간을 정의하기 위해
    this.#difficulty = 0;
    this.#nonce = 0;
    this.#height = _previousBlock ? _previousBlock.height + 1 : 0;
  }

  get version() {
    return this.#version;
  }
  get merkleRoot() {
    return this.#merkleRoot;
  }
  get timestamp() {
    return this.#timestamp;
  }
  get difficulty() {
    return this.#difficulty;
  }
  get nonce() {
    return this.#nonce;
  }
  setTimestamp() {
    //set Timestamp() 라고 쓰면 set 메서드로 매개변수를 받아야하는데
    //setTimestamp 는 임의로 메서드를 만들어서 정의한거임.
    this.#timestamp = Date.now();
  }

  get height() {
    return this.#height;
  }
}

class Block extends BlockHeader {
  #previousHash;
  #data;
  #hash;
  constructor(_data, _previousBlock) {
    //1-2
    //상속받은 BlockHeader의 constructor 에 데이터를 다시 전달해줌
    //super 는 부모클래스의 constructor를 호출하는 것.
    super(_data, _previousBlock);
    this.#previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);
    this.#hash =
      _data && _previousBlock ? Block.createHash(this) : "0".repeat(64);
    this.#data = _data;
  }

  get previousHash() {
    return this.#previousHash;
  }
  get data() {
    return this.#data;
  }
  get hash() {
    return this.#hash;
  }

  static createHash(_block) {
    let tempStr = "";
    //블록의 정보를 임시로 합칠 string 변수
    _block.setTimestamp();
    // 이 과정이 끝나면 체인에 연결하게 된다.
    tempStr += _block.version;
    tempStr += _block.merkleRoot;
    tempStr += _block.timestamp;
    tempStr += _block.height;
    tempStr += _block.difficulty;
    tempStr += _block.nonce;
    tempStr += _block.previousHash;
    // console.log(tempStr);
    // hash는 현재 만들고 있는 키라서 추가하지 않는다.
    // data는 merkleRoot로 합쳐져 있기 때문에 merkleRoot로 대체.
    return SHA256(tempStr).toString().toUpperCase();
  }
}

const temp = new Block(["a"]);
//1-1
Block.createHash(temp);

module.exports = Block;
