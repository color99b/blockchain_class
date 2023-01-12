// Hex : 16진수
// -> 암호화 했을 때 나오는 수
// Dex : 10진수
// Oct : 8진수
// Bin : 2진수
function pow(x, n) {
  let value = 1;
  for (let i = 0; i < n; i++) {
    value *= x;
  }
  return value;
}

function dec2hex(dec) {
  //10진수는 16진수로
  let value = ``;
  while (dec) {
    switch (dec % 16) {
      //10진수를 16으로 나눠서 그 나머지를 사용한다.
      //0에서부터 15까지 사용, 0~9까지는 그대로 사용
      //10~15 << 한자리로 나타내야하기때문에 영어의 A~F
      case 10:
        value = "A" + value;
        break;
      case 11:
        value = "B" + value;
        break;
      case 12:
        value = "C" + value;
        break;
      case 13:
        value = "D" + value;
        break;
      case 14:
        value = "E" + value;
        break;
      case 15:
        value = "F" + value;
        break;
      default:
        //0~9까지 처리한다.
        value = (dec % 16) + value;
        break;
    }

    dec = parseInt(dec / 16);
  }
  return value;
}

function hex2dec(hex) {
  //보통 프로그래밍 상에서 Hex, 즉 16진수는 string(문자열, 문장)으로 저장되게 된다.
  let value = 0; // << 10진수 저장할 변수
  for (let i = 0; i < hex.length; ++i) {
    let temp = 0;
    switch (hex[i]) {
      case "A":
        temp = 10;

        break;
      case "B":
        temp = 11;

        break;
      case "C":
        temp = 12;

        break;
      case "D":
        temp = 13;

        break;
      case "E":
        temp = 14;

        break;
      case "F":
        temp = 15;

        break;

      default:
        temp = +hex[i];
        break;
    }
    value += temp * 16 ** (hex.length - i - 1);
    //value += temp * pow(16, hex.length-i-1);
    //hex를 기준으로 0의 자리부터16제곱을 생각하면 0,1,2,3,4,5 이런식으로 된다.
  }
}

function dec2bin(dec) {
  let value = "";
  while (dec) {
    value = (dec % 2) + value;
    dec = parseInt(dec / 2);
  }
  return value;
}

function bin2dec(bin) {
  let value = 0;
  for (let i = 0; i < bin.length; ++i) {
    value += bin[i] * 2 ** (bin.length - i - 1);
  }
  return value;
}
console.log(dec2hex(6843516834));
