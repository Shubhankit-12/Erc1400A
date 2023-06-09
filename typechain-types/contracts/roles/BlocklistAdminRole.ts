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

export interface BlocklistAdminRoleInterface extends utils.Interface {
  functions: {
    "addBlocklistAdmin(address,address)": FunctionFragment;
    "isBlocklistAdmin(address,address)": FunctionFragment;
    "removeBlocklistAdmin(address,address)": FunctionFragment;
    "renounceBlocklistAdmin(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addBlocklistAdmin"
      | "isBlocklistAdmin"
      | "removeBlocklistAdmin"
      | "renounceBlocklistAdmin"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addBlocklistAdmin",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isBlocklistAdmin",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeBlocklistAdmin",
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
    functionFragment: "isBlocklistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeBlocklistAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceBlocklistAdmin",
    data: BytesLike
  ): Result;

  events: {
    "BlocklistAdminAdded(address,address)": EventFragment;
    "BlocklistAdminRemoved(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BlocklistAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BlocklistAdminRemoved"): EventFragment;
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

export interface BlocklistAdminRole extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BlocklistAdminRoleInterface;

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

    isBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    removeBlocklistAdmin(
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

  isBlocklistAdmin(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  removeBlocklistAdmin(
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

    isBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    removeBlocklistAdmin(
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
  };

  estimateGas: {
    addBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeBlocklistAdmin(
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

    isBlocklistAdmin(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeBlocklistAdmin(
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
