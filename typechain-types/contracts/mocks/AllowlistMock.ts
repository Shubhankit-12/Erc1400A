/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface AllowlistMockInterface extends utils.Interface {
  functions: {
    "addAllowlistAdmin(address,address)": FunctionFragment;
    "addAllowlisted(address,address)": FunctionFragment;
    "isAllowlistAdmin(address,address)": FunctionFragment;
    "isAllowlisted(address,address)": FunctionFragment;
    "mockFunction(address,bool)": FunctionFragment;
    "removeAllowlistAdmin(address,address)": FunctionFragment;
    "removeAllowlisted(address,address)": FunctionFragment;
    "renounceAllowlistAdmin(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addAllowlistAdmin"
      | "addAllowlisted"
      | "isAllowlistAdmin"
      | "isAllowlisted"
      | "mockFunction"
      | "removeAllowlistAdmin"
      | "removeAllowlisted"
      | "renounceAllowlistAdmin"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addAllowlistAdmin",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addAllowlisted",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowlistAdmin",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isAllowlisted",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "mockFunction",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAllowlistAdmin",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAllowlisted",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceAllowlistAdmin",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAllowlistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addAllowlisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAllowlistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAllowlisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAllowlistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAllowlisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceAllowlistAdmin",
    data: BytesLike
  ): Result;

  events: {
    "AllowlistAdminAdded(address,address)": EventFragment;
    "AllowlistAdminRemoved(address,address)": EventFragment;
    "AllowlistedAdded(address,address)": EventFragment;
    "AllowlistedRemoved(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AllowlistAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllowlistAdminRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllowlistedAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AllowlistedRemoved"): EventFragment;
}

export interface AllowlistAdminAddedEventObject {
  token: string;
  account: string;
}
export type AllowlistAdminAddedEvent = TypedEvent<
  [string, string],
  AllowlistAdminAddedEventObject
>;

export type AllowlistAdminAddedEventFilter =
  TypedEventFilter<AllowlistAdminAddedEvent>;

export interface AllowlistAdminRemovedEventObject {
  token: string;
  account: string;
}
export type AllowlistAdminRemovedEvent = TypedEvent<
  [string, string],
  AllowlistAdminRemovedEventObject
>;

export type AllowlistAdminRemovedEventFilter =
  TypedEventFilter<AllowlistAdminRemovedEvent>;

export interface AllowlistedAddedEventObject {
  token: string;
  account: string;
}
export type AllowlistedAddedEvent = TypedEvent<
  [string, string],
  AllowlistedAddedEventObject
>;

export type AllowlistedAddedEventFilter =
  TypedEventFilter<AllowlistedAddedEvent>;

export interface AllowlistedRemovedEventObject {
  token: string;
  account: string;
}
export type AllowlistedRemovedEvent = TypedEvent<
  [string, string],
  AllowlistedRemovedEventObject
>;

export type AllowlistedRemovedEventFilter =
  TypedEventFilter<AllowlistedRemovedEvent>;

export interface AllowlistMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AllowlistMockInterface;

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
    addAllowlistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isAllowlistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mockFunction(
      token: PromiseOrValue<string>,
      mockActivated: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeAllowlistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceAllowlistAdmin(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addAllowlistAdmin(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addAllowlisted(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isAllowlistAdmin(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isAllowlisted(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mockFunction(
    token: PromiseOrValue<string>,
    mockActivated: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeAllowlistAdmin(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeAllowlisted(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceAllowlistAdmin(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAllowlistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isAllowlistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mockFunction(
      token: PromiseOrValue<string>,
      mockActivated: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAllowlistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceAllowlistAdmin(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AllowlistAdminAdded(address,address)"(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): AllowlistAdminAddedEventFilter;
    AllowlistAdminAdded(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): AllowlistAdminAddedEventFilter;

    "AllowlistAdminRemoved(address,address)"(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): AllowlistAdminRemovedEventFilter;
    AllowlistAdminRemoved(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): AllowlistAdminRemovedEventFilter;

    "AllowlistedAdded(address,address)"(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): AllowlistedAddedEventFilter;
    AllowlistedAdded(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): AllowlistedAddedEventFilter;

    "AllowlistedRemoved(address,address)"(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): AllowlistedRemovedEventFilter;
    AllowlistedRemoved(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): AllowlistedRemovedEventFilter;
  };

  estimateGas: {
    addAllowlistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isAllowlistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mockFunction(
      token: PromiseOrValue<string>,
      mockActivated: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeAllowlistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceAllowlistAdmin(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAllowlistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isAllowlistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mockFunction(
      token: PromiseOrValue<string>,
      mockActivated: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeAllowlistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeAllowlisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceAllowlistAdmin(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
