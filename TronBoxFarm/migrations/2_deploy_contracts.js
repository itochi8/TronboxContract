var BnbStaking = artifacts.require("./BnbStaking.sol");
var PrivateToken = artifacts.require('./PrivateToken.sol');
var LotteryRewardPool = artifacts.require('./LotteryRewardPool.sol');
var MasterChef = artifacts.require('./MasterChef.sol');
var SousChef = artifacts.require('./SousChef.sol');
var SyrupBar = artifacts.require('./SyrupBar.sol');
var TimeLock = artifacts.require("./TimeLock.sol");

module.exports = function(deployer) {
  const _adminAddress = 'TEzANkv3Wojp2pXoD81LeZNQ9WnVeLDg2b';
  const receiver = 'THogef4W4MisatmQnurGkqhvcFqGCcHDhy';
  const rewordPerBlock = 1;
  const startBlock = 1;
  const endBlock = 2;
  const _wbnb = '0xaa25aa7a19f9c426e07dee59b12f944f4d9f1dd3';
  
  deployer.deploy(PrivateToken).then(function() {
    deployer.deploy(SyrupBar,PrivateToken.address).then(function() {
        
        deployer.deploy(MasterChef,PrivateToken.address,SyrupBar.address,_adminAddress,rewordPerBlock,startBlock).then(function() {
          deployer.deploy(LotteryRewardPool,MasterChef.address,PrivateToken.address,_adminAddress,receiver);
        });
        deployer.deploy(SousChef,SyrupBar.address,rewordPerBlock,startBlock,endBlock);
        deployer.deploy(BnbStaking,SyrupBar.address,PrivateToken.address,rewordPerBlock,startBlock,endBlock,_adminAddress,_wbnb);
    });
  });

  deployer.deploy(TimeLock,_adminAddress,"1209600",{gasLimit: 2500000});
 
};
