/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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
} from "../../../common";

export interface ExtensionInterface extends utils.Interface {
  functions: {
    "registerTokenSetup(address,uint8,bool,bool,bool,bool,address[])": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "registerTokenSetup"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "registerTokenSetup",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>,
      PromiseOrValue<boolean>,
      PromiseOrValue<string>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "registerTokenSetup",
    data: BytesLike
  ): Result;

  events: {};
}

export interface Extension extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExtensionInterface;

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
    registerTokenSetup(
      token: PromiseOrValue<string>,
      certificateActivated: PromiseOrValue<BigNumberish>,
      allowlistActivated: PromiseOrValue<boolean>,
      blocklistActivated: PromiseOrValue<boolean>,
      granularityByPartitionActivated: PromiseOrValue<boolean>,
      holdsActivated: PromiseOrValue<boolean>,
      operators: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  registerTokenSetup(
    token: PromiseOrValue<string>,
    certificateActivated: PromiseOrValue<BigNumberish>,
    allowlistActivated: PromiseOrValue<boolean>,
    blocklistActivated: PromiseOrValue<boolean>,
    granularityByPartitionActivated: PromiseOrValue<boolean>,
    holdsActivated: PromiseOrValue<boolean>,
    operators: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    registerTokenSetup(
      token: PromiseOrValue<string>,
      certificateActivated: PromiseOrValue<BigNumberish>,
      allowlistActivated: PromiseOrValue<boolean>,
      blocklistActivated: PromiseOrValue<boolean>,
      granularityByPartitionActivated: PromiseOrValue<boolean>,
      holdsActivated: PromiseOrValue<boolean>,
      operators: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    registerTokenSetup(
      token: PromiseOrValue<string>,
      certificateActivated: PromiseOrValue<BigNumberish>,
      allowlistActivated: PromiseOrValue<boolean>,
      blocklistActivated: PromiseOrValue<boolean>,
      granularityByPartitionActivated: PromiseOrValue<boolean>,
      holdsActivated: PromiseOrValue<boolean>,
      operators: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    registerTokenSetup(
      token: PromiseOrValue<string>,
      certificateActivated: PromiseOrValue<BigNumberish>,
      allowlistActivated: PromiseOrValue<boolean>,
      blocklistActivated: PromiseOrValue<boolean>,
      granularityByPartitionActivated: PromiseOrValue<boolean>,
      holdsActivated: PromiseOrValue<boolean>,
      operators: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
