const { timeStamp } = require("console");
const IBlock = require("./block.interface");
const {
  lib: { merkle, SHA256, hexToBinary },
  constant: { TY_ADJSUTMENT_INTERVAL, BLOCK_GENERATION_INVERVAL, TIME_UNIT },
} = require("./config");

class Block extends IBlock {
  //인터페이스 상속
  constructor() {
    super();
    //부모 함수 사용
  }

  //블록생성 함수
  create(_previousBLock, _adjustmentDifficulty, _adjustmentTimestamp, _data) {
    try {
      const { height, hash: previousHash } = _previousBLock;
      //이전 블록의 hash를 _previousBLock hash로 초기화한다.
      this.height = height + 1;
      //기존 블록의 높이(개수)보다 하나 증가. (생성할 때 높이 증가시켜서 생성)
      this.previousHash = previousHash;
      //기존 블록의 hash값을 갖는다. (오류 확인을 위해서)

      //임시값 초기화
      const merkleRoot = this.getMerleRoot(_data);
      // 정상적으로 Root 구하도록 호출
      if (merkleRoot.isError) throw new Error(merkleRoot.error);
      //throw 명령어를 사용해소 try문을 멈추고 catch로 보낸다.]
      //merkleRoot 에서 오류 발생 시 생성 멈춤
      this.merkleRoot = merkleRoot.value;

      //임시값초기화
      this.none = 0;
      this.timestamp = Date.now();
      //현재 시간으로 초기화
      this.difficulty = this.getDifficulty(
        //난이도를 구하는 메서드 호출
        {
          height: this.height,
          timestamp: this.timestamp,
          previousDifficulty: _previousBLock.difficulty,
          _adjustmentDifficulty,
          _adjustmentTimestamp,
        }
      );
      //메서드 만들기전에 초기화
      this.hash = this.createHash(this);
      //createHash : 블록의 hash를 구하는 메서드 호출
      this.data = _data;
      //데이터 저장 (블록 데이터);
      this.updateBlock(
        //블록 생성 (마이닝을 거쳐서 )
        _previousBLock,
        _adjustmentDifficulty,
        _adjustmentTimestamp
      );
      return this;
    } catch (error) {
      console.log(error);
    }
  }

  // 머클루트를 구해주는 함수
  getMerleRoot(_data) {
    //data가 배열인지 확인
    return Array.isArray(_data)
      ? {
          isError: false,
          value: _data.length
            ? //_data의 길이가 있다 = merkle 라이브러리 사용
              merkle("sha256").sync(_data).root()
            : // merkle 라이브러리를 사용하며 sha256 방식의 hash 암호화를 사용,
              // merkleRoot 를 구한다.
              "0".repeat(64),
          //_data의 길이가 없으면 초기값을 반환
        }
      : { isError: true, error: "이거 사고임" }; //배열이아니다.
  }

  //해시만들어주는 함수
  createHash(_block) {
    //hash 생성 함수
    return SHA256(
      //Sha256 방식의 hash 암호화 사용
      //256은 256bit라는 뜻
      Object.entries(_block)
        //객체의 키와 값을 배열로 변경 [[key, value], [key, value], [key, value]]
        .filter((item) => item[0] !== "hash" && item[0] !== "data")
        //hash 생성 메서드기 때문에 hash를 제외, data는 merkleRoot 로 대체됨
        .join("")
    );
    //배열을 하나의 문자열로 연결
  }

  //난이도를 구하는 메서드
  getDifficulty({
    innerHeight, //입력되는 높이
    timeStamp, //입력되는 시간
    previousDifficulty, //이전 블록의 난이도
    adjustmentDifficulty, //난이도 조절의 단위 개수 전의 난이도(이전에 조절된 난이도의 값)
  }) {
    {
      //높이가 난이도 조절 단위 개수 미만일 경우 최초블록에서 현재까지
      if (height < DIFFICULTY_ADJSUTMENT_INTERVAL) return 0;

      //높이가 난이도 조절 단위 개수의 2배 미만일 경우 최초블록이 포함된 단이 개수 다음 개수
      if (height < DIFFICULTY_ADJSUTMENT_INTERVAL * 2) return 1;

      // 높이의 난이도 조절 단위 개수 나머지가 0이 아니면 개수가 맞아 떨어지지않아서.
      if (height % DIFFICULTY_ADJSUTMENT_INTERVAL !== 0)
        //이전난이도를 이용
        return previousDifficulty;
      //만약 난이도 조절 단위 개수가 10이라면 10개단위로 난이도 조절을 하게 된다.
      // 높이가 0까지는 0, 높이가 10~19까지는 1, 이후에는 각10단위 마다 아래 코드로 난이도 조절

      const timeTaken = timestamp - adjustmentTimestamp;
      //현재 시간과 난이도 조절 단위 개수 이전의 시간의 차를 확인
      //블록이 생성된 시간 - 10개 이전의 생성시간 = 시간차

      //블록 생성 기준시간 10분에 블록하나 생성
      //10개만들면 100분
      //난이도 증가
      const timeExpected =
        TIME_UNIT * BLOCK_GENERATION_INVERVAL * DIFFICULTY_ADJSUTMENT_INTERVAL;
      if (timeTaken < timeExpected * 0.5) return adjustmentDifficulty + 1;
      //설정된 블록 10개 생성시간보다 0.5배 미만이면 난이도 증가, 300초보다 작은경우

      //난이도 감소
      if (timeTaken > timeExpected * 1.5) return adjustmentDifficulty - 1;
      //설정된 블록 10개 생성시간보다 1.5배 초과이면 난이도 증가, 900초보다 큰 경우
    }

    return adjustmentDifficulty;
    //위 if문 2개의 조건에 맞지 않으면 기존 난이도
  }

  //블록 마이닝(채굴)
  updateBlock(_previousBLock, _adjustmentDifficulty, _adjustmentTimestamp) {
    //난이도에 맞게 hash를 생성, 문제풀이라고도 함
    let hashBinary = hexToBinary(this.hash);
    //현재 hash를 bit형식, binary 형식으로 바꾼다.
    while (!hashBinary.startsWith("0".repeat(this.difficulty))) {
      // 0과 1로 이루어진 hash 문자의 시작되는 0의 개수가 0의 난이도 개수와 같은지 확인
      // startWith : 특정 문자열로 시작하는지 확인
      // 난이도를 구해야하니까 블록의 난이도를 전달해주고
      // 난이도가 2면 "00" 두개인지 확인
      // 블록의 난이도 갯수만큼 "0" 붙을때까지 반복

      this.nonce += 1;
      //nonce 를 증가시키고
      this.timestamp = Date.now();
      //블록 생성 시점이 달라졌음으로 현재 시간을 다시 설정
      this.difficulty = this.getDifficulty(
        //난이도를 다시 구한다.
        //이전 블록 시간이랑 높이는 추가해야함.
        _previousBLock.difficulty,
        _adjustmentDifficulty,
        _adjustmentTimestamp
      );

      // 생성할 블록의 해시값
      this.hash = this.createHash(this);
      hashBinary = hexToBinary(this.hash);
      //비교를 위해 hash를 다시 bit, binary 형식으로 변경
    }
  }

  //블록의 검증 함수(블록이 정상적인 블록인지 검사)
  isVaildNewBlock(_newBlock, _previousBLock) {
    //생성된 블록이 문제가 없는지 확인하는 메서드
    if (_newBlock.height !== _previousBLock.height + 1) {
      //생성된 블록이 이전 블록의 다음 개수를 가져오는지 확인
      return { isError: true, error: "block's heihgt is incorrect" };
    }
    if (_newBlock._previousBLock !== _previousBLock.hash) {
      //생성된 블록에 저장된 이전 블록 해시가 이전 블록 hash와 같은지 확인
      return { isError: true, error: "Hash of preivous block is incorrect" };
    }

    if (this.createHash(_newBlock) !== _newBlock.hash) {
      //hash를 다시 생성하여 생성된 블록의 hash와 맞는지 확인
      return { isError: true, error: "Hash of block is incorrect" };
    }
    //모두 통과해서 문제가 없으면 에러가 없다고 표시학 블록을 반환
    return { isError: false, value: _newBlock };
  }
}

module.exports = Block;
