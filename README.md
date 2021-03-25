# TronboxContract

First you shoud install TronBox if you d'ont have it already.

`npm install -g tronbox`

First, you must be in the folder `TronBox-core` or `TronBoxFarm` folders using the command `cd <folderName>`  

To compile the contract, use:

`tronbox compile`

By default, tronbox compiler only compiles modified contracts since last compile, to reduce unnecessary compiling. If you wish to compile the entire file, you can use `--compile-all`.

`tronbox compile --compile-all`

And you can use the following command to migrate and deploy the smart contract on Tron Blockchain

`tronbox migrate --reset`

After the deployement you shoud see somthing like that :
```
Compiling ./contracts/Migrations.sol...
Compiling ./contracts/PancakeERC20.sol...
Compiling ./contracts/PancakeFactory.sol...
Compiling ./contracts/PancakePair.sol...
Compiling ./contracts/interfaces/IERC20.sol...
Compiling ./contracts/interfaces/IPancakeCallee.sol...
Compiling ./contracts/interfaces/IPancakeERC20.sol...
Compiling ./contracts/interfaces/IPancakeFactory.sol...
Compiling ./contracts/interfaces/IPancakePair.sol...
Compiling ./contracts/libraries/Math.sol...
Compiling ./contracts/libraries/SafeMath.sol...
Compiling ./contracts/libraries/UQ112x112.sol...
Compiling ./contracts/test/ERC20.sol...
Writing artifacts to ./build/contracts

Using network 'development'.

Running migration: 1_initial_migration.js
  Replacing Migrations...
  Migrations:
    (base58) TBBYEWojDSbmCvjSbCcq6FMEyHEpPVL6wt
    (hex) 410d4d2bdff6bca7fb110c1fc3350e8732faf57b5e
Saving successful migration to network...
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Replacing PancakeERC20...
  PancakeERC20:
    (base58) TVYxud6mkD2J48vFBE6Qw9pG7VzevWCL4X
    (hex) 41d6ccc48b1791c3739c1e3bb5cd195fe1fd04c5b3
  Replacing PancakeFactory...
Saving successful migration to network...
Saving artifacts...
  PancakeFactory:
    (base58) TAjkt8NrURAPRXKFfLQXnW6d86dnudbwvp
    (hex) 41086cea31a4549b363a064f759d578896d6aa2d94
  Replacing PancakePair...
  PancakePair:
    (base58) TSxWF4ctMaS4h4mSisKogQXkDCqvGNVndu  
    (hex) 41ba581d63a43c4a34d491285329a1bc6de84f7fed
```

Then tou can go to the TronScan Web site : https://shasta.tronscan.org/ for check and interact with your smart contract. All you have to do is copy transaction adress link and go to https://shasta.tronscan.org/.

``` Running migration: 2_deploy_contracts.js
  Replacing PancakeERC20...
  PancakeERC20:
    (base58) TVYxud6mkD2J48vFBE6Qw9pG7VzevWCL4X
    (hex) 41d6ccc48b1791c3739c1e3bb5cd195fe1fd04c5b3 
 ```
 
For example the adresse of this transaction is : `TVYxud6mkD2J48vFBE6Qw9pG7VzevWCL4X` 


