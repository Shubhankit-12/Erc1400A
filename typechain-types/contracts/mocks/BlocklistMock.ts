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

export interface BlocklistMockInterface extends utils.Interface {
  functions: {
    "addBlocklistAdmin(address,address)": FunctionFragment;
    "addBlocklisted(address,address)": FunctionFragment;
    "isBlocklistAdmin(address,address)": FunctionFragment;
    "isBlocklisted(address,address)": FunctionFragment;
    "mockFunction(address,bool)": FunctionFragment;
    "removeBlocklistAdmin(address,address)": FunctionFragment;
    "removeBlocklisted(address,address)": FunctionFragment;
    "renounceBlocklistAdmin(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addBlocklistAdmin"
      | "addBlocklisted"
      | "isBlocklistAdmin"
      | "isBlocklisted"
      | "mockFunction"
      | "removeBlocklistAdmin"
      | "removeBlocklisted"
      | "renounceBlocklistAdmin"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBlocklistAdmin",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "addBlocklisted",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isBlocklistAdmin",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isBlocklisted",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "mockFunction",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBlocklistAdmin",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBlocklisted",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceBlocklistAdmin",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBlocklistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addBlocklisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBlocklistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBlocklisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mockFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeBlocklistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeBlocklisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceBlocklistAdmin",
    data: BytesLike
  ): Result;

  events: {
    "BlocklistAdminAdded(address,address)": EventFragment;
    "BlocklistAdminRemoved(address,address)": EventFragment;
    "BlocklistedAdded(address,address)": EventFragment;
    "BlocklistedRemoved(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BlocklistAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BlocklistAdminRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BlocklistedAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BlocklistedRemoved"): EventFragment;
}

export interface BlocklistAdminAddedEventObject {
  token: string;
  account: string;
}
export type BlocklistAdminAddedEvent = TypedEvent<
  [string, string],
  BlocklistAdminAddedEventObject
>;

export type BlocklistAdminAddedEventFilter =
  TypedEventFilter<BlocklistAdminAddedEvent>;

export interface BlocklistAdminRemovedEventObject {
  token: string;
  account: string;
}
export type BlocklistAdminRemovedEvent = TypedEvent<
  [string, string],
  BlocklistAdminRemovedEventObject
>;

export type BlocklistAdminRemovedEventFilter =
  TypedEventFilter<BlocklistAdminRemovedEvent>;

export interface BlocklistedAddedEventObject {
  token: string;
  account: string;
}
export type BlocklistedAddedEvent = TypedEvent<
  [string, string],
  BlocklistedAddedEventObject
>;

export type BlocklistedAddedEventFilter =
  TypedEventFilter<BlocklistedAddedEvent>;

export interface BlocklistedRemovedEventObject {
  token: string;
  account: string;
}
export type BlocklistedRemovedEvent = TypedEvent<
  [string, string],
  BlocklistedRemovedEventObject
>;

export type BlocklistedRemovedEventFilter =
  TypedEventFilter<BlocklistedRemovedEvent>;

export interface BlocklistMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BlocklistMockInterface;

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
    addBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mockFunction(
      token: PromiseOrValue<string>,
      mockActivated: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceBlocklistAdmin(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addBlocklistAdmin(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addBlocklisted(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isBlocklistAdmin(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isBlocklisted(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mockFunction(
    token: PromiseOrValue<string>,
    mockActivated: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeBlocklistAdmin(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeBlocklisted(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceBlocklistAdmin(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    addBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mockFunction(
      token: PromiseOrValue<string>,
      mockActivated: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    removeBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceBlocklistAdmin(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BlocklistAdminAdded(address,address)"(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): BlocklistAdminAddedEventFilter;
    BlocklistAdminAdded(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): BlocklistAdminAddedEventFilter;

    "BlocklistAdminRemoved(address,address)"(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): BlocklistAdminRemovedEventFilter;
    BlocklistAdminRemoved(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): BlocklistAdminRemovedEventFilter;

    "BlocklistedAdded(address,address)"(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): BlocklistedAddedEventFilter;
    BlocklistedAdded(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): BlocklistedAddedEventFilter;

    "BlocklistedRemoved(address,address)"(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): BlocklistedRemovedEventFilter;
    BlocklistedRemoved(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): BlocklistedRemovedEventFilter;
  };

  estimateGas: {
    addBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mockFunction(
      token: PromiseOrValue<string>,
      mockActivated: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removeBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceBlocklistAdmin(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mockFunction(
      token: PromiseOrValue<string>,
      mockActivated: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeBlocklisted(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceBlocklistAdmin(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
