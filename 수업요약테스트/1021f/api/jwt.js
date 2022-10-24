const crypto = require("crypto-js");

const tempHeader = JSON.stringify({ name: "block7", alg: "HS256" });
//stringify : 객체를 JSON 형식으로 변환
// parse : Json 형식을 객체로 변환
// alg : 어떤 알고리즘을 사용할 것인가.

const base64Header = Buffer.from(tempHeader).toString("base64url");
//jwt 는 base64url 형식의 포맷을 사용한다.
//base64
const JWTHeader = base64Header.replaceAll("=", "");
//--------------------------header 완성 --------------------------------

const tempPayLoad = JSON.stringify({ maker: "tester", expiresIn: "10m" });
const base64PayLoad = Buffer.from(tempPayLoad).toString("base64url");
const JWTPayLoad = base64PayLoad.replaceAll("=", "");
// -------------------------payload 완성 ------------------------------

const tempSignature = crypto
  .SHA256(JWTHeader + "." + JWTPayLoad, "key")
  .toString(crypto.enc.Base64url)
  .replaceAll("=", "");

const jwt = `${JWTHeader}.${JWTPayLoad}.${tempSignature}`;
//json web token 은 "header.payload.singature" 로 이루어져 있다.

console.log(jwt);
