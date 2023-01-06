class IBlock {
  //Block 인터페이스  (I는 interface 암시)
  version;
  height;
  timestamp;
  previousHash;
  hash;
  merkleRoot;
  nonce; //논스 값 (난이도에 대해서 퀴즈를 푼 횟수)
  difficulty;
  data;

  // _block 이 매개변수로 전달 되지 않으면 null
  constructor(_block = null) {
    if (_block === null) {
      this.version = "1.0.0";
      return this;
    }

    this.version = _block.version;
    this.height = _block.height;
    this.timestamp = _block.timestamp;
    this.previousHash = _block.previousHash;
    this.hash = _block.hash;
    this.merkleRoot = _block.merkleRoot;
    this.nonce = _block.nonce;
    this.difficulty = _block.difficulty;
    this.data = _block.data;
  }
}
module.exports = IBlock;
