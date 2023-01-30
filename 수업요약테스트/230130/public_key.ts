//npm i elliptic
// 타원 곡선 알고리즘을 사용하는 암호화 라이브러리
//npm i -D @type/elliptic
// typescript 사용하니까 타입도 불러오자.
import cryptoJS from "crypto-js";
import elliptic from "elliptic";

const privateKey: string = cryptoJS.lib.WordArray.random(32)
  .toString()
  .toUpperCase();

const ec: elliptic.ec = new elliptic.ec("secp256k1");
// 타원 곡선을 생성한다.
// ec에 전달하는 매개변수 "secp256k1"은 elliptic에서 제공하는 사전 설정 중 하나이다.
// 사전 설정으로는 secp256k1 , p192, p224 등이 있다.
// 비트코인과 이더리움에서 secp256k1 을 사용한다. => y^2 = x^3 +7 / G = "02....."

const keyPair: elliptic.ec.KeyPair = ec.keyFromPrivate(privateKey);
// 개인키를 사용해서 키페어를 생성
//  - 공개키 생성
// keyFromPrivate 개인키를 사용하여 키페어를 생성한다 ( 개인키 + 공개키 )
const publicKey: string = keyPair.getPublic().encode("hex", true);
console.log("privateKey :", privateKey);
console.log("privateKey.length :", privateKey.length);
console.log("publicKey :", publicKey);
console.log("publicKey.length :", publicKey.length);
//타원 곡선에서 공개키는 찾은 점의 좌표이다. => x,y 두 수로 이루어져있다.
// 공개키는 문자열로 나타낼 시 "x" + "y" = `${x}${y}` => 두 좌표를 문자로써 연결한 string 이다.
// x,y는 256bits의 크기를 가진다 -> 공개키는 512 bits의 크기를 가진다. -> 128자
// 128자는 길어서 압축을하게 된다 -> x의 값은 그대로 가져오고 y의 값은 짝수일때는 02 홀수일때는 03을 사용하게된다.
// => 02XXXXXX || 03XXXXXX
// 타원 곡선 알고리즘을 사용해서 공개키를 구했을 때 -> x,y 좌표가 공개키로 정의된다.
// => x,y 를 모두 표기하면 128자의 길이를 갖게된다 -> 너무 길어서 64자로 줄인다.-> y를 버릴순 없어서 홀수와 짝수로 간단하게 추가한다.

const hash = cryptoJS.SHA256("checking data").toString().toUpperCase();
//전송할 데이터(입력된 값: checking data ), hash로 암호화해두자,
console.log("hash :", hash);
console.log("hash.length:", hash.length);

const signature: elliptic.ec.Signature = keyPair.sign(hash, "hex");
console.log(signature);

//위에서 만든 서명을 확인
const verify = ec.verify(hash, signature, ec.keyFromPublic(publicKey, "hex"));
// 정상적으로 복호화 되어 hash가 확인되면 true가 반환된다.
// verify (데아터, 서명, 키페어) << 서명을 키페어로 사용해서 복호화하여 데이터와 비교한다.
//같은 데이터라면 true가 반환된다.
// keyFrompublic (공개키, 인코딩형식) 공개키를 사용하여 키페어를 생서앟ㄴ다.
console.log("verify :", verify);

const newPrivateKey: string = cryptoJS.lib.WordArray.random(32)
  .toString()
  .toUpperCase();

const newKeyPair = ec.keyFromPrivate(newPrivateKey);

const newPublicKey = newKeyPair.getPublic().encode("hex", true).toUpperCase();

const newVerify = ec.verify(
  hash,
  signature,
  ec.keyFromPublic(newPublicKey, "hex")
);

console.log("newVerify :", newVerify);
// 새로운 공개키로 확인했기에 false가 반환된다.
// -keyFromPublic 에서 'hex' 가 없으면 터진다.
// -hash(데이터) 와 signature(서명)과 publickey(공개키) 가 정확히 일치하지 않는다. => 상대가 보낸 것인지 확신할 수 없다.

const myWallet = publicKey.slice(26);
console.log(myWallet.length);
console.log(0x88);
console.log(136.toString(16));
