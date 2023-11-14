// SPDX-License-Identifier: MIT
// Copyright (c) 2016 Smart Contract Solutions, Inc. 2016
// Copyright (c) 2022, Circle Internet Financial Limited.
pragma solidity >0.7.6;

import {IERC20} from "../interfaces/IERC20.sol";
import {Ownable2Step} from "./Ownable2Step.sol";
import {SafeERC20} from "../ERC20/SafeERC20.sol";

/**
 * @notice Base contract which allows children to rescue ERC20 locked in their contract.
 * @dev Forked from https://github.com/centrehq/centre-tokens/blob/0d3cab14ebd133a83fc834dbd48d0468bdf0b391/contracts/v1.1/Rescuable.sol
 * Modifications:
 * 1. Update Solidity version from 0.6.12 to 0.7.6 (8/23/2022)
 */
contract Rescuable is Ownable2Step {
    using SafeERC20 for IERC20;

    address private _rescuer;

    event RescuerChanged(address indexed newRescuer);

    /**
     * @notice Returns current rescuer
     * @return Rescuer's address
     */
    function rescuer() external view returns (address) {
        return _rescuer;
    }

    /**
     * @notice Revert if called by any account other than the rescuer.
     */
    modifier onlyRescuer() {
        require(msg.sender == _rescuer, "Rescuable: caller is not the rescuer");
        _;
    }

    /**
     * @notice Rescue ERC20 tokens locked up in this contract.
     * @param tokenContract ERC20 token contract address
     * @param to        Recipient address
     * @param amount    Amount to withdraw
     */
    function rescueERC20(
        IERC20 tokenContract,
        address to,
        uint256 amount
    ) external onlyRescuer {
        tokenContract.safeTransfer(to, amount);
    }

    /**
     * @notice Assign the rescuer role to a given address.
     * @param newRescuer New rescuer's address
     */
    function updateRescuer(address newRescuer) external onlyOwner {
        require(
            newRescuer != address(0),
            "Rescuable: new rescuer is the zero address"
        );
        _rescuer = newRescuer;
        emit RescuerChanged(newRescuer);
    }
}