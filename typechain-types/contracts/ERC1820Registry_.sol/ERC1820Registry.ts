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

export interface ERC1820RegistryInterface extends utils.Interface {
  functions: {
    "getInterfaceImplementer(address,bytes32)": FunctionFragment;
    "getManager(address)": FunctionFragment;
    "implementsERC165Interface(address,bytes4)": FunctionFragment;
    "implementsERC165InterfaceNoCache(address,bytes4)": FunctionFragment;
    "interfaceHash(string)": FunctionFragment;
    "setInterfaceImplementer(address,bytes32,address)": FunctionFragment;
    "setManager(address,address)": FunctionFragment;
    "updateERC165Cache(address,bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getInterfaceImplementer"
      | "getManager"
      | "implementsERC165Interface"
      | "implementsERC165InterfaceNoCache"
      | "interfaceHash"
      | "setInterfaceImplementer"
      | "setManager"
      | "updateERC165Cache"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getInterfaceImplementer",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getManager",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "implementsERC165Interface",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "implementsERC165InterfaceNoCache",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "interfaceHash",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setInterfaceImplementer",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setManager",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateERC165Cache",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getInterfaceImplementer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementsERC165Interface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementsERC165InterfaceNoCache",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "interfaceHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setInterfaceImplementer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateERC165Cache",
    data: BytesLike
  ): Result;

  events: {
    "InterfaceImplementerSet(address,bytes32,address)": EventFragment;
    "ManagerChanged(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "InterfaceImplementerSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ManagerChanged"): EventFragment;
}

export interface InterfaceImplementerSetEventObject {
  addr: string;
  interfaceHash: string;
  implementer: string;
}
export type InterfaceImplementerSetEvent = TypedEvent<
  [string, string, string],
  InterfaceImplementerSetEventObject
>;

export type InterfaceImplementerSetEventFilter =
  TypedEventFilter<InterfaceImplementerSetEvent>;

export interface ManagerChangedEventObject {
  addr: string;
  newManager: string;
}
export type ManagerChangedEvent = TypedEvent<
  [string, string],
  ManagerChangedEventObject
>;

export type ManagerChangedEventFilter = TypedEventFilter<ManagerChangedEvent>;

export interface ERC1820Registry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC1820RegistryInterface;

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
    getInterfaceImplementer(
      _addr: PromiseOrValue<string>,
      _interfaceHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getManager(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    implementsERC165Interface(
      _contract: PromiseOrValue<string>,
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    implementsERC165InterfaceNoCache(
      _contract: PromiseOrValue<string>,
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    interfaceHash(
      _interfaceName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setInterfaceImplementer(
      _addr: PromiseOrValue<string>,
      _interfaceHash: PromiseOrValue<BytesLike>,
      _implementer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setManager(
      _addr: PromiseOrValue<string>,
      _newManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateERC165Cache(
      _contract: PromiseOrValue<string>,
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  getInterfaceImplementer(
    _addr: PromiseOrValue<string>,
    _interfaceHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getManager(
    _addr: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  implementsERC165Interface(
    _contract: PromiseOrValue<string>,
    _interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  implementsERC165InterfaceNoCache(
    _contract: PromiseOrValue<string>,
    _interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  interfaceHash(
    _interfaceName: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  setInterfaceImplementer(
    _addr: PromiseOrValue<string>,
    _interfaceHash: PromiseOrValue<BytesLike>,
    _implementer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setManager(
    _addr: PromiseOrValue<string>,
    _newManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateERC165Cache(
    _contract: PromiseOrValue<string>,
    _interfaceId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getInterfaceImplementer(
      _addr: PromiseOrValue<string>,
      _interfaceHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getManager(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    implementsERC165Interface(
      _contract: PromiseOrValue<string>,
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    implementsERC165InterfaceNoCache(
      _contract: PromiseOrValue<string>,
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    interfaceHash(
      _interfaceName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    setInterfaceImplementer(
      _addr: PromiseOrValue<string>,
      _interfaceHash: PromiseOrValue<BytesLike>,
      _implementer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setManager(
      _addr: PromiseOrValue<string>,
      _newManager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateERC165Cache(
      _contract: PromiseOrValue<string>,
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "InterfaceImplementerSet(address,bytes32,address)"(
      addr?: PromiseOrValue<string> | null,
      interfaceHash?: PromiseOrValue<BytesLike> | null,
      implementer?: PromiseOrValue<string> | null
    ): InterfaceImplementerSetEventFilter;
    InterfaceImplementerSet(
      addr?: PromiseOrValue<string> | null,
      interfaceHash?: PromiseOrValue<BytesLike> | null,
      implementer?: PromiseOrValue<string> | null
    ): InterfaceImplementerSetEventFilter;

    "ManagerChanged(address,address)"(
      addr?: PromiseOrValue<string> | null,
      newManager?: PromiseOrValue<string> | null
    ): ManagerChangedEventFilter;
    ManagerChanged(
      addr?: PromiseOrValue<string> | null,
      newManager?: PromiseOrValue<string> | null
    ): ManagerChangedEventFilter;
  };

  estimateGas: {
    getInterfaceImplementer(
      _addr: PromiseOrValue<string>,
      _interfaceHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getManager(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implementsERC165Interface(
      _contract: PromiseOrValue<string>,
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implementsERC165InterfaceNoCache(
      _contract: PromiseOrValue<string>,
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    interfaceHash(
      _interfaceName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setInterfaceImplementer(
      _addr: PromiseOrValue<string>,
      _interfaceHash: PromiseOrValue<BytesLike>,
      _implementer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setManager(
      _addr: PromiseOrValue<string>,
      _newManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateERC165Cache(
      _contract: PromiseOrValue<string>,
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getInterfaceImplementer(
      _addr: PromiseOrValue<string>,
      _interfaceHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getManager(
      _addr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementsERC165Interface(
      _contract: PromiseOrValue<string>,
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementsERC165InterfaceNoCache(
      _contract: PromiseOrValue<string>,
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    interfaceHash(
      _interfaceName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setInterfaceImplementer(
      _addr: PromiseOrValue<string>,
      _interfaceHash: PromiseOrValue<BytesLike>,
      _implementer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setManager(
      _addr: PromiseOrValue<string>,
      _newManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateERC165Cache(
      _contract: PromiseOrValue<string>,
      _interfaceId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
