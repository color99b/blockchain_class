// const merkle = require("merkle");
// const SHA256 = require("crypto-js").SHA256;
// const hexToBinary = require("hex-to-binary");
console.log("block 확인중");

import merkle from "merkle";
import { SHA256 } from "crypto-js";
import hexToBinary from "hex-to-binary";

class BlockHeader implements IBlockHeader {
  //implemnets는 interface를 기준으로 타입을 확인한다.
  //class 의 프로퍼티 타입을 선언해주는 것이 아닌 정상적으로 타입이 정의되었나 체크하는 용도일뿐이다.
  version: string;
  merkleRoot: string;
  timestamp: number;
  height: number;
  difficulty: number;
  nonce: number;

  constructor(_data: string[], _previousBlock?: IBlock) {
    this.version = "1.0.0";

    const merkleRoot: TError<string> | TResult<string> =
      this.createMerkleRoot(_data);

    if (merkleRoot.isError === true) {
      //확실하게 확인하면 msg 또는 value를 구분할 수 있다.
      this.merkleRoot = "";
      console.error(merkleRoot.msg);
    } else if (merkleRoot.isError === false) {
      this.merkleRoot = merkleRoot.value;
    }

    this.setTimestamp();
    this.height = _previousBlock ? _previousBlock.height + 1 : 0;
    this.difficulty = 0;
    this.nonce = 0;
  }

  setTimestamp(): void {
    //return이 없으므로 void
    this.timestamp = Date.now();
  }

  createMerkleRoot(_data: Array<string>): TError<string> | TResult<string> {
    if (!Array.isArray(_data) || !_data.length) {
      return { isError: true, msg: "data가 배열이 아니거나 빈 배열" };
    }
    return { isError: false, value: merkle("sha256").sync(_data).root() };
  }

  getDifficulty({
    previousDifficulty,
    adjustmentDifficulty,
    adjustmentTimestamp,
    DAI,
    averageGenerationTime,
  }: {
    // previousDifficulty: number;
    // adjustmentDifficulty: number;
    // adjustmentTimestamp: number;
    // DAI: number;
    // averageGenerationTime: number;
    [keys: string]: number;
    //keys는 이름 붙인거고 어떤속성이름이든 string이 키인 값은 number이다.
    // 위 속성은 남은애들 처리하기위해 마지막에 쓴느 경우가 많다.
  }): void {
    if (this.height < DAI) {
      this.difficulty = 0;
    } else if (this.height < DAI * 2) {
      this.difficulty = 1;
    } else if (this.height % DAI !== 0) {
      this.difficulty = previousDifficulty;
    } else {
      const timeToken: number = this.timestamp - adjustmentTimestamp;

      if (timeToken < averageGenerationTime * 0.9) {
        // 이전 10개 생성 시간이 0.9초보다 적게 걸렸을 때
        this.difficulty = adjustmentDifficulty + 1;
        // 난이도를 올려서 시간이 더 걸릴 수 있게 조절한다.
      } else if (timeToken > averageGenerationTime * 1.1) {
        // 이전 10개 생성 시간이 1.1초보다 많이 걸렸을 때
        this.difficulty = adjustmentDifficulty - 1;
        // 난이도를 낮춰서 시간이 덜 걸릴 수 있게 조절한다.
      } else {
        this.difficulty = adjustmentDifficulty;
      }
    }
  }
}

class Block extends BlockHeader implements IBlock {
  previousHash: string;
  hash: string;
  data: string[];

  constructor(
    _data: string[],
    _previousBlock?: IBlock,
    _adjustmentBlock?: IBlock,
    _config?: Iconfig
    //매개변수 간 앞에 빈칸이 올 순 없기 때문에 ?붙은 변수는 뒤로 위치한다.
  ) {
    super(_data, _previousBlock);

    this.previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);

    if (this.merkleRoot) {
      if (_adjustmentBlock && _config) {
        this.getDifficulty({
          previousDifficulty: _previousBlock.difficulty,
          adjustmentDifficulty: _adjustmentBlock.difficulty,
          adjustmentTimestamp: _adjustmentBlock.timestamp,
          DAI: _config.DAI,
          averageGenerationTime: _config.averageGenerationTime,
        });
      }

      this.hash = Block.createHash(this);

      if (_adjustmentBlock && _config) {
        this.updateBlock({
          previousDifficulty: _previousBlock.difficulty,
          adjustmentDifficulty: _adjustmentBlock.difficulty,
          adjustmentTimestamp: _adjustmentBlock.timestamp,
          DAI: _config.DAI,
          averageGenerationTime: _config.averageGenerationTime,
        });
      }
    } else {
      this.hash = "";
    }

    this.data = _data;
    // console.log(this);
  }

  static createHash(_block: IBlock): string {
    let tempStr = "";
    const keys = Object.keys(_block);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === "hash" || keys[i] === "data") {
        continue;
      }
      tempStr += _block[keys[i]]; // string 형식
    }

    return SHA256(tempStr).toString().toUpperCase();
  }

  updateBlock(difficultyOptions: { [keys: string]: number }): void {
    let hashBinary = hexToBinary(this.hash);

    while (!hashBinary.startsWith("0".repeat(this.difficulty))) {
      this.nonce += 1;
      this.setTimestamp();
      this.getDifficulty(difficultyOptions);
      this.hash = Block.createHash(this);
      hashBinary = hexToBinary(this.hash);
    }
    console.log(hashBinary);
    console.log(hashBinary.slice(0, this.difficulty));
  }

  static isValidBlock(
    _newBlock: IBlock,
    _previousBlock: IBlock
  ): TError<string> | TResult<IBlock> {
    if (_newBlock.height !== _previousBlock.height + 1) {
      return { isError: true, msg: "높이가 다르다." };
    }
    if (_newBlock.previousHash !== _previousBlock.hash) {
      return {
        isError: true,
        msg: "이전 블록의 hash와 새로운 블록의 이전 hash가 다르다.",
      };
    }
    if (_newBlock.hash !== Block.createHash(_newBlock)) {
      return { isError: true, msg: "hash 생성 중 오류 발생" };
    }
    return { isError: false, value: _newBlock };
  }
}

export default Block;
