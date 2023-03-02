const test = artifacts.require("Test");
// 컴파일 후 생성된 json 파일명을 전달하여 스마트 컨트랙트 데이터를 가져온다.

module.exports = function (deployer) {
  // deployer : truffle 이 제공하는 배포를 위한 객체
  deployer.deploy(test); // 배포하는 코드이므로 이 코드가 돌때마다trnasaction 이 발생함.
};
