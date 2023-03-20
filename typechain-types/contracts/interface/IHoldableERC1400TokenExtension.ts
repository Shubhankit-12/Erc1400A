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

export interface IHoldableERC1400TokenExtensionInterface
  extends utils.Interface {
  functions: {
    "executeHold(address,bytes32,uint256,bytes32)": FunctionFragment;
    "retrieveHoldData(address,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "executeHold" | "retrieveHoldData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "executeHold",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveHoldData",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "executeHold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveHoldData",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IHoldableERC1400TokenExtension extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IHoldableERC1400TokenExtensionInterface;

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
    executeHold(
      token: PromiseOrValue<string>,
      holdId: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      lockPreimage: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    retrieveHoldData(
      token: PromiseOrValue<string>,
      holdId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        number
      ] & {
        partition: string;
        sender: string;
        recipient: string;
        notary: string;
        value: BigNumber;
        expiration: BigNumber;
        secretHash: string;
        secret: string;
        status: number;
      }
    >;
  };

  executeHold(
    token: PromiseOrValue<string>,
    holdId: PromiseOrValue<BytesLike>,
    value: PromiseOrValue<BigNumberish>,
    lockPreimage: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  retrieveHoldData(
    token: PromiseOrValue<string>,
    holdId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      string,
      BigNumber,
      BigNumber,
      string,
      string,
      number
    ] & {
      partition: string;
      sender: string;
      recipient: string;
      notary: string;
      value: BigNumber;
      expiration: BigNumber;
      secretHash: string;
      secret: string;
      status: number;
    }
  >;

  callStatic: {
    executeHold(
      token: PromiseOrValue<string>,
      holdId: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      lockPreimage: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    retrieveHoldData(
      token: PromiseOrValue<string>,
      holdId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        string,
        number
      ] & {
        partition: string;
        sender: string;
        recipient: string;
        notary: string;
        value: BigNumber;
        expiration: BigNumber;
        secretHash: string;
        secret: string;
        status: number;
      }
    >;
  };

  filters: {};

  estimateGas: {
    executeHold(
      token: PromiseOrValue<string>,
      holdId: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      lockPreimage: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    retrieveHoldData(
      token: PromiseOrValue<string>,
      holdId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    executeHold(
      token: PromiseOrValue<string>,
      holdId: PromiseOrValue<BytesLike>,
      value: PromiseOrValue<BigNumberish>,
      lockPreimage: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    retrieveHoldData(
      token: PromiseOrValue<string>,
      holdId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
