// SPDX-License-Identifier: MIT
// Copyright (c) 2016 Smart Contract Solutions, Inc. 2016
// Copyright (c) 2022, Circle Internet Financial Limited.
pragma solidity >0.7.6;

import {IERC20} from "./IERC20.sol";

/**
 * @title IMintBurnToken
 * @notice interface for mintable and burnable ERC20 token
 */
interface IMintBurnToken is IERC20 {
    /**
     * @dev Function to mint tokens
     * @param to The address that will receive the minted tokens.
     * @param amount The amount of tokens to mint. Must be less than or equal
     * to the minterAllowance of the caller.
     * @return A boolean that indicates if the operation was successful.
     */
    function mint(address to, uint256 amount) external returns (bool);

    /**
     * @dev allows a minter to burn some of its own tokens
     * Validates that caller is a minter and that sender is not blacklisted
     * amount is less than or equal to the minter's account balance
     * @param amount uint256 the amount of tokens to be burned
     */
    function burn(uint256 amount) external;
}