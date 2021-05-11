pragma solidity =0.5.4;

import '../PrivateERC20.sol';

contract ERC20 is PrivateERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
