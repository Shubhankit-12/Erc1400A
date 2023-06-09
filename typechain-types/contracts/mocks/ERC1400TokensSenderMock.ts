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
} from "../../common";

export interface ERC1400TokensSenderMockInterface extends utils.Interface {
  functions: {
    "canImplementInterfaceForAddress(bytes32,address)": FunctionFragment;
    "canTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)": FunctionFragment;
    "tokensToTransfer(bytes,bytes32,address,address,address,uint256,bytes,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "canImplementInterfaceForAddress"
      | "canTransfer"
      | "tokensToTransfer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "canImplementInterfaceForAddress",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "canTransfer",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensToTransfer",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "canImplementInterfaceForAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensToTransfer",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ERC1400TokensSenderMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC1400TokensSenderMockInterface;

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
    canImplementInterfaceForAddress(
      interfaceHash: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    canTransfer(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      arg7: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tokensToTransfer(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      arg7: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  canImplementInterfaceForAddress(
    interfaceHash: PromiseOrValue<BytesLike>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  canTransfer(
    arg0: PromiseOrValue<BytesLike>,
    arg1: PromiseOrValue<BytesLike>,
    arg2: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    arg7: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tokensToTransfer(
    arg0: PromiseOrValue<BytesLike>,
    arg1: PromiseOrValue<BytesLike>,
    arg2: PromiseOrValue<string>,
    from: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    arg7: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    canImplementInterfaceForAddress(
      interfaceHash: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    canTransfer(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      arg7: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tokensToTransfer(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      arg7: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    canImplementInterfaceForAddress(
      interfaceHash: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    canTransfer(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      arg7: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensToTransfer(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      arg7: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    canImplementInterfaceForAddress(
      interfaceHash: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    canTransfer(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      arg7: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokensToTransfer(
      arg0: PromiseOrValue<BytesLike>,
      arg1: PromiseOrValue<BytesLike>,
      arg2: PromiseOrValue<string>,
      from: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      arg7: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
