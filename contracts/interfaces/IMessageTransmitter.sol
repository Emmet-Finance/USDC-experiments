// SPDX-License-Identifier: MIT
// Copyright (c) 2016 Smart Contract Solutions, Inc. 2016
// Copyright (c) 2022, Circle Internet Financial Limited.
pragma solidity >0.7.6;

import {IRelayer} from "./IRelayer.sol";
import {IReceiver} from "./IReceiver.sol";

/**
 * @title IMessageTransmitter
 * @notice Interface for message transmitters, which both relay and receive messages.
 */
interface IMessageTransmitter is IRelayer, IReceiver {

}