// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardToken is ERC20 {
    constructor(uint256 initialSuppy) ERC20("Reward Token", "RWT") {
        _mint(msg.sender, initialSuppy * 10 ** 18);
    }
}
