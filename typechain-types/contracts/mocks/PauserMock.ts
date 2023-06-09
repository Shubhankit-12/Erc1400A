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

export interface PauserMockInterface extends utils.Interface {
  functions: {
    "addPauser(address,address)": FunctionFragment;
    "isPauser(address,address)": FunctionFragment;
    "mockFunction(address,bool)": FunctionFragment;
    "removePauser(address,address)": FunctionFragment;
    "renouncePauser(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addPauser"
      | "isPauser"
      | "mockFunction"
      | "removePauser"
      | "renouncePauser"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addPauser",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isPauser",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "mockFunction",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: "removePauser",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "renouncePauser",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "addPauser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPauser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "mockFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePauser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renouncePauser",
    data: BytesLike
  ): Result;

  events: {
    "PauserAdded(address,address)": EventFragment;
    "PauserRemoved(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PauserAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PauserRemoved"): EventFragment;
}

export interface PauserAddedEventObject {
  token: string;
  account: string;
}
export type PauserAddedEvent = TypedEvent<
  [string, string],
  PauserAddedEventObject
>;

export type PauserAddedEventFilter = TypedEventFilter<PauserAddedEvent>;

export interface PauserRemovedEventObject {
  token: string;
  account: string;
}
export type PauserRemovedEvent = TypedEvent<
  [string, string],
  PauserRemovedEventObject
>;

export type PauserRemovedEventFilter = TypedEventFilter<PauserRemovedEvent>;

export interface PauserMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PauserMockInterface;

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
    addPauser(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isPauser(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    mockFunction(
      token: PromiseOrValue<string>,
      mockActivated: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removePauser(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renouncePauser(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addPauser(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isPauser(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  mockFunction(
    token: PromiseOrValue<string>,
    mockActivated: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removePauser(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renouncePauser(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addPauser(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isPauser(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    mockFunction(
      token: PromiseOrValue<string>,
      mockActivated: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    removePauser(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    renouncePauser(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PauserAdded(address,address)"(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): PauserAddedEventFilter;
    PauserAdded(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): PauserAddedEventFilter;

    "PauserRemoved(address,address)"(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): PauserRemovedEventFilter;
    PauserRemoved(
      token?: PromiseOrValue<string> | null,
      account?: PromiseOrValue<string> | null
    ): PauserRemovedEventFilter;
  };

  estimateGas: {
    addPauser(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isPauser(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mockFunction(
      token: PromiseOrValue<string>,
      mockActivated: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    removePauser(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renouncePauser(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addPauser(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isPauser(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mockFunction(
      token: PromiseOrValue<string>,
      mockActivated: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removePauser(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renouncePauser(
      token: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
