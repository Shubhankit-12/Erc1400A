/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface IERC1400TokensValidatorExtendedInterface
  extends utils.Interface {
  functions: {
    "isAllowlisted(address,address)": FunctionFragment;
    "isBlocklisted(address,address)": FunctionFragment;
    "retrieveTokenSetup(address)": FunctionFragment;
    "spendableBalanceOfByPartition(address,bytes32,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "isAllowlisted"
      | "isBlocklisted"
      | "retrieveTokenSetup"
      | "spendableBalanceOfByPartition"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isAllowlisted",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isBlocklisted",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveTokenSetup",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "spendableBalanceOfByPartition",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "isAllowlisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBlocklisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveTokenSetup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "spendableBalanceOfByPartition",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IERC1400TokensValidatorExtended extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC1400TokensValidatorExtendedInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    retrieveTokenSetup(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number, boolean, boolean, boolean, boolean, string[]]>;

    spendableBalanceOfByPartition(
      token: PromiseOrValue<string>,
      partition: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  isAllowlisted(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isBlocklisted(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  retrieveTokenSetup(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[number, boolean, boolean, boolean, boolean, string[]]>;

  spendableBalanceOfByPartition(
    token: PromiseOrValue<string>,
    partition: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    isAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    retrieveTokenSetup(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[number, boolean, boolean, boolean, boolean, string[]]>;

    spendableBalanceOfByPartition(
      token: PromiseOrValue<string>,
      partition: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    isAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retrieveTokenSetup(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    spendableBalanceOfByPartition(
      token: PromiseOrValue<string>,
      partition: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retrieveTokenSetup(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    spendableBalanceOfByPartition(
      token: PromiseOrValue<string>,
      partition: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}