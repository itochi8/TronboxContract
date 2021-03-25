pragma solidity =0.5.4;

import '../PancakeERC20.sol';

contract ERC20 is PancakeERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
