var PancakeERC20 = artifacts.require("./PancakeERC20.sol");
var PancakeFactory = artifacts.require("./PancakeFactory.sol");
var PancakePair = artifacts.require("./PancakePair.sol");

module.exports = function(deployer) {

    deployer.deploy(PancakeERC20).then(function() {
      deployer.deploy(PancakeFactory,PancakeERC20.address).then(function() {
        deployer.deploy(PancakePair);
      });
    });
};
