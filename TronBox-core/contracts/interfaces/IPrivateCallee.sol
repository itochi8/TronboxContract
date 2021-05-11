pragma solidity >=0.5.4;

interface IPrivateCallee {
    function privateCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
