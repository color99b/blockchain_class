const crypto = require("crypto-js");

console.log(crypto.SHA256("dkssuddlfksakf gpffhdn gpffhdn").toString());

console.log(crypto.MD5("glgl").toString());

console.log(crypto.SHA1("glgl").toString());
console.log(crypto.SHA512("glgl").toString());

const tempAES = crypto.AES.encrypt("glgl", "zlzl").toString();

console.log(tempAES);

console.log(crypto.AES.decrypt(tempAES, "zlzl").toString(crypto.enc.Utf8));
