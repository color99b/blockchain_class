// npm init -y
// npm i merkle crypto-js hex-to-binary

//라이브러리들을 가져오고
const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;

//암호화
const hexToBinary = require("hex-to-binary");
//hex 방식(0~F) 로 지정된 데이터를 바이너리 방식의 (0~1)로 변환시켜준다.

//난이도 조절용 수치를미리 정해놓자. 블록 생성 시간을 조절하기 위해서

//최초블록에서 10번째 블록까지는 난이도가 0
// 최초블록 이후에 생성되는 블록의 20번째 부턴 난이도 수치가 조절될 수 있게
//최초에 난이도 조절할 때 최초블록부터 이 수치까지는 난이도 증가없이 0으로 주려고 만든 값
const DIFFICULTY_ADJSUTMENT_INTERVAL = 10;
///난이도 조절에 대해서 단위 개수, 난이도를 변경하는데 기준

const BLOCK_GENERATION_INVERVAL = 10;
// 블록 하나당 걸리는 시간

const TIME_UNIT = 60 * 1000;
// 블록 1개를 만드는데 걸리는 시간 10분
// 1에 대한 시간 단위(1분 = 60초 * 1000 밀리초)

module.exports = {
  lib: {
    merkle,
    SHA256,
    hexToBinary,
  },

  constant: {
    DIFFICULTY_ADJSUTMENT_INTERVAL,
    BLOCK_GENERATION_INVERVAL,
    TIME_UNIT,
  },
};
