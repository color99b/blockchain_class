const YJToken = artifacts.require("YJToken");
module.exports = function (deployer) {
  deployer.deploy(YJToken, "YJToken", "YJ", 1000);
};
