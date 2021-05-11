var PrivateERC20 = artifacts.require("./PrivateERC20.sol");
var PrivateFactory = artifacts.require("./PrivateFactory.sol");
var PrivatePair = artifacts.require("./PrivatePair.sol");

module.exports = function(deployer) {

    deployer.deploy(PrivateERC20).then(function() {
      deployer.deploy(PrivateFactory,PrivateERC20.address).then(function() {
        deployer.deploy(PrivatePair);
      });
    });
};
