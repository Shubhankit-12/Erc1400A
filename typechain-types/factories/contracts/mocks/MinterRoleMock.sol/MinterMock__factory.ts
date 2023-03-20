/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MinterMock,
  MinterMockInterface,
} from "../../../../contracts/mocks/MinterRoleMock.sol/MinterMock";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "MinterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100203361002560201b60201c565b610308565b61003d81600061008360201b6101271790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b610093828261013160201b60201c565b156100d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100ca90610256565b60405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156101a2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610199906102e8565b60405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600082825260208201905092915050565b7f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500600082015250565b6000610240601f836101f9565b915061024b8261020a565b602082019050919050565b6000602082019050818103600083015261026f81610233565b9050919050565b7f526f6c65733a206163636f756e7420697320746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006102d26022836101f9565b91506102dd82610276565b604082019050919050565b60006020820190508181036000830152610301816102c5565b9050919050565b61068f806103176000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80633092afd514610051578063983b2d561461006d5780639865027514610089578063aa271e1a14610093575b600080fd5b61006b60048036038101906100669190610455565b6100c3565b005b61008760048036038101906100829190610455565b6100e1565b005b6100916100ff565b005b6100ad60048036038101906100a89190610455565b61010a565b6040516100ba919061049d565b60405180910390f35b6100cc3361010a565b6100d557600080fd5b6100de816101cf565b50565b6100ea3361010a565b6100f357600080fd5b6100fc81610229565b50565b610108336101cf565b565b600061012082600061028390919063ffffffff16565b9050919050565b6101318282610283565b15610171576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161016890610515565b60405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6101e381600061034b90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b61023d81600061012790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156102f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102eb906105a7565b60405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6103558282610283565b610394576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038b90610639565b60405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610422826103f7565b9050919050565b61043281610417565b811461043d57600080fd5b50565b60008135905061044f81610429565b92915050565b60006020828403121561046b5761046a6103f2565b5b600061047984828501610440565b91505092915050565b60008115159050919050565b61049781610482565b82525050565b60006020820190506104b2600083018461048e565b92915050565b600082825260208201905092915050565b7f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500600082015250565b60006104ff601f836104b8565b915061050a826104c9565b602082019050919050565b6000602082019050818103600083015261052e816104f2565b9050919050565b7f526f6c65733a206163636f756e7420697320746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006105916022836104b8565b915061059c82610535565b604082019050919050565b600060208201905081810360008301526105c081610584565b9050919050565b7f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c60008201527f6500000000000000000000000000000000000000000000000000000000000000602082015250565b60006106236021836104b8565b915061062e826105c7565b604082019050919050565b6000602082019050818103600083015261065281610616565b905091905056fea2646970667358221220ee592c6b28886fbe8faf8181122e377ef4b32febf20c726ace30da6c0c916d8164736f6c63430008090033";

type MinterMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MinterMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MinterMock__factory extends ContractFactory {
  constructor(...args: MinterMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MinterMock> {
    return super.deploy(overrides || {}) as Promise<MinterMock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MinterMock {
    return super.attach(address) as MinterMock;
  }
  override connect(signer: Signer): MinterMock__factory {
    return super.connect(signer) as MinterMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MinterMockInterface {
    return new utils.Interface(_abi) as MinterMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MinterMock {
    return new Contract(address, _abi, signerOrProvider) as MinterMock;
  }
}
