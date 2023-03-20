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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface DomainAwareInterface extends utils.Interface {
  functions: {
    "domainName()": FunctionFragment;
    "domainSeparator()": FunctionFragment;
    "domainVersion()": FunctionFragment;
    "generateDomainSeparator()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "domainName"
      | "domainSeparator"
      | "domainVersion"
      | "generateDomainSeparator"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "domainName",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "domainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "domainVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "generateDomainSeparator",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "domainName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "domainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "domainVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateDomainSeparator",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DomainAware extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DomainAwareInterface;

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
    domainName(overrides?: CallOverrides): Promise<[string]>;

    domainSeparator(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    domainVersion(overrides?: CallOverrides): Promise<[string]>;

    generateDomainSeparator(overrides?: CallOverrides): Promise<[string]>;
  };

  domainName(overrides?: CallOverrides): Promise<string>;

  domainSeparator(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  domainVersion(overrides?: CallOverrides): Promise<string>;

  generateDomainSeparator(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    domainName(overrides?: CallOverrides): Promise<string>;

    domainSeparator(overrides?: CallOverrides): Promise<string>;

    domainVersion(overrides?: CallOverrides): Promise<string>;

    generateDomainSeparator(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    domainName(overrides?: CallOverrides): Promise<BigNumber>;

    domainSeparator(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    domainVersion(overrides?: CallOverrides): Promise<BigNumber>;

    generateDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    domainName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    domainSeparator(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    domainVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    generateDomainSeparator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
