const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;
class BlockHeader {
  version;
  merkleRoot;
  timestamp;
  difficulty;
  nonce;
  height;
  //private 키로 정의(생성)할 경우 키들이 객체에서 보이지 않는다.
  // 후에 통신할 때 다른 처리를 하려 했으나 쉽게 가기 위해 private를 취소.
  constructor(_data, _previousBlock) {
    //1-3
    this.version = "1.0.0";
    // this.merkleRoot = _data
    //   ? merkle("sha256").sync(_data).root()
    //   : "0".repeat(64);
    const merkleRoot = this.createMerkleRoot(_data);
    //머클루트 생성 메서드호출
    if (merkleRoot.isError) {
      this.merkleRoot = "";
      console.error(merkleRoot.msg);
    } else {
      this.merkleRoot = merkleRoot.value;
    }
    this.setTimestamp();
    // Date << 클래스, now << static 정의된 메소드
    // 이후에 체인에 블록을 추가하는 시점으로 블록생성 시간을 정의하기 위해
    this.difficulty = 0;
    this.nonce = 0;
    this.height = _previousBlock ? _previousBlock.height + 1 : 0;
  }

  setTimestamp() {
    //set Timestamp() 라고 쓰면 set 메서드로 매개변수를 받아야하는데
    //setTimestamp 는 임의로 메서드를 만들어서 정의한거임.
    this.timestamp = Date.now();
  }

  createMerkleRoot(_data) {
    if (!Array.isArray(_data) || !_data.length) {
      //Array.isArray 는 매개변수가 배열인지 확인한다.
      return { isError: true, msg: "배열이 아니거나 빈 배열이다" };
    }
    return { isError: false, value: merkle("sha256").sync(_data).root() };
  }

  getDifficulty({
    previousdifficulty, // 이전 블록의 난이도
    adjustmentDifficulty, // 난이도 조절 단위 개수 이전의 블록의 난이도
    adjustmentTimestamp, // 난이도 조절 단위 개수 이전의 블록 생성 시간, 10개전 블록의 생성 시간
    DAI, // 난이도 조절 단위 개수
    averageGenerationTime, // 블록 세대당 생성 시간, 블록 10개당 생성 시간
  }) {
    if (this.height < DAI) {
      this.difficulty = 0;
      // 10개 이전에는 제네시스 블록 생성 시 설정한 난이도 (0) 으로 설정된다.
    } else if (this.height < DAI * 2) this.difficulty = 1;
    //20개 이전에는 제네시스 블록 생성 시 설정한 난이도보다 하나 더 높은 난이도가 설정된다.
    else if (this.height % DAI !== 0) this.difficulty = previousdifficulty;
    // 높이가 난이도
    else {
      const timeToken = this.timestamp - adjustmentTimestamp;
      //10개 전 블록과 현재 블록의 생성 시간 차이

      if (timeToken < averageGenerationTime * 0.5) {
        // 이전 10개 생성 시간이 5분보다 적게 걸렸을 때
        this.difficulty = adjustmentDifficulty + 1;
        // 난이도를 올려서시간이 더 걸릴 수 있게 조절한다.
      } else if (timeToken > averageGenerationTime * 1.5) {
        // 이전 10개 생성 시간이 15분보다 많이 걸렸을 때

        this.difficulty = adjustmentDifficulty - 1;
        // 난이도를 낮춰서시간이 더 걸릴 수 있게 조절한다.
      } else {
        this.difficulty = adjustmentDifficulty;
      }
    }
  }
}

class Block extends BlockHeader {
  previousHash;
  data;
  hash;
  constructor(_data, _previousBlock, _adjustmentBlock, _config) {
    //1-2
    //상속받은 BlockHeader의 constructor 에 데이터를 다시 전달해줌
    //super 는 부모클래스의 constructor를 호출하는 것.
    super(_data, _previousBlock);
    this.previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);
    // this.hash =
    //   _data && _previousBlock ? Block.createHash(this) : "0".repeat(64);
    if (this.merkleRoot) {
      if (_adjustmentBlock && _config) {
        // 제네시스 블록 생성 시 전달하지 않음으로예외 처리.
        this.getDifficulty({
          previousdifficulty: _previousBlock.difficulty,
          adjustmentDifficulty: _adjustmentBlock.difficulty,
          adjustmentTimestamp: _adjustmentBlock.timestamp,
          DAI: _config.DAI,
          averageGenerationTime: _config.averageGenerationTime,
        });
      }
      this.hash = Block.createHash(this);
    } else {
      this.hash = "";
      //이후 오류 발생 여부 확인용
    }
    this.data = _data;
  }

  get previousHash() {
    return this.previousHash;
  }
  get data() {
    return this.data;
  }
  get hash() {
    return this.hash;
  }

  static createHash(_block) {
    let tempStr = "";
    //블록의 정보를 임시로 합칠 string 변수
    // _block.setTimestamp();
    // 위 코드를 살리면 블록 속 내용이 바뀌는 거라 블록체인 연결 x
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

    const keys = Object.keys(_block);
    // Object.keys => 객체의 key들을 배열로 가져온다.
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === "hash" || keys[i] === "data") {
        continue; // for, while같은 반복문에서 아래의 코드를 실행하지 않고
        //위로 올라간다.
      }
      tempStr += _block[keys[i]];
    }

    return SHA256(tempStr).toString().toUpperCase();
  }

  static isVaildBlock(_newBlock, _previousBlock) {
    //생성된 블록이 정상인지 확인해보자.
    if (_newBlock.height !== _previousBlock.height + 1) {
      return { isError: true, msg: "높이가 다르다" };
    }

    if (_newBlock.previousHash !== _previousBlock.hash) {
      return { isError: true, msg: "hash가 다르다" };
    }

    if (_newBlock.hash !== Block.createHash(_newBlock)) {
      return { isError: true, msg: "hash 생성 중 오류 발생" };
    }
    return { isError: false, value: _newBlock };
  }
}

// const temp = new Block(["a"]);
//1-1
// Block.createHash(temp);

module.exports = Block;
