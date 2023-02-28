const keythereum = require("keythereum");
const path = require("path");

const address = "0x4ecbf4fffe5c02cfb6355f6abf05a04e215e9b20";

const keyObj = keythereum.importFromFile(address, __dirname);

const privateKey = keythereum.recover("asd", keyObj);
//매개변수롷 비밀번호와 key 객체를 전달한다
// 개인키에 대한 객체를 반환받는다.
console.log(privateKey.toString("hex"));
// ebe067ef452315cf596a3877dae0d23b27ea6ccfcdb71f9e8eedad8685a1ecb3
