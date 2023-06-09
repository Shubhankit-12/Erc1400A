/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AllowlistMock,
  AllowlistMockInterface,
} from "../../../contracts/mocks/AllowlistMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AllowlistAdminAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AllowlistAdminRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AllowlistedAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AllowlistedRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addAllowlistAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addAllowlisted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isAllowlistAdmin",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isAllowlisted",
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
        name: "token",
        type: "address",
      },
      {
        internalType: "bool",
        name: "mockActivated",
        type: "bool",
      },
    ],
    name: "mockFunction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeAllowlistAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeAllowlisted",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "renounceAllowlistAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000f7b38038062000f7b8339818101604052810190620000379190620002ed565b6200004981336200005060201b60201c565b506200043a565b620000a7816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206200010560201b620003171790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f7a247cc00caf875946bd4af440d6b1776fe6bb625e25cad7626bedf5e6a1c37060405160405180910390a35050565b620001178282620001b860201b60201c565b156200015a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001519062000380565b60405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200022c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002239062000418565b60405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002b58262000288565b9050919050565b620002c781620002a8565b8114620002d357600080fd5b50565b600081519050620002e781620002bc565b92915050565b60006020828403121562000306576200030562000283565b5b60006200031684828501620002d6565b91505092915050565b600082825260208201905092915050565b7f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500600082015250565b600062000368601f836200031f565b9150620003758262000330565b602082019050919050565b600060208201905081810360008301526200039b8162000359565b9050919050565b7f526f6c65733a206163636f756e7420697320746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000620004006022836200031f565b91506200040d82620003a2565b604082019050919050565b600060208201905081810360008301526200043381620003f1565b9050919050565b610b31806200044a6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063685e25191161005b578063685e2519146101255780636c41d4ea14610141578063dfe15da01461015d578063fa061ca01461017957610088565b80630d21cdd81461008d5780634261699f146100a957806342be5787146100c557806361c2e281146100f5575b600080fd5b6100a760048036038101906100a2919061084b565b610195565b005b6100c360048036038101906100be9190610878565b6101a2565b005b6100df60048036038101906100da9190610878565b6101c5565b6040516100ec91906108d3565b60405180910390f35b61010f600480360381019061010a9190610878565b61021f565b60405161011c91906108d3565b60405180910390f35b61013f600480360381019061013a9190610878565b61027a565b005b61015b6004803603810190610156919061091a565b61029d565b005b61017760048036038101906101729190610878565b6102d1565b005b610193600480360381019061018e9190610878565b6102f4565b005b61019f81336103bf565b50565b816101ad81336101c5565b6101b657600080fd5b6101c0838361046d565b505050565b6000610217826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061051c90919063ffffffff16565b905092915050565b600061027282600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061051c90919063ffffffff16565b905092915050565b8161028581336101c5565b61028e57600080fd5b61029883836105e4565b505050565b816102a8813361021f565b156102b257600080fd5b81600260006101000a81548160ff021916908315150217905550505050565b816102dc81336101c5565b6102e557600080fd5b6102ef83836103bf565b505050565b816102ff81336101c5565b61030857600080fd5b6103128383610693565b505050565b610321828261051c565b15610361576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610358906109b7565b60405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61040f816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061074190919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f84c618afa7439d9985b8c707a18637a9c6b0128399c0f5dee2ca90254d66fc3a60405160405180910390a35050565b6104be81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061031790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167ff537a4c39a5575220902fda69b79909e02d44c8a7146b1a1c3b936f86aa71e3860405160405180910390a35050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561058d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058490610a49565b60405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61063581600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061074190919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f99c45157365b22d82f22eea7bc8cff76cb53628113f4b52b10f83db3b404001660405160405180910390a35050565b6106e3816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061031790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f7a247cc00caf875946bd4af440d6b1776fe6bb625e25cad7626bedf5e6a1c37060405160405180910390a35050565b61074b828261051c565b61078a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078190610adb565b60405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610818826107ed565b9050919050565b6108288161080d565b811461083357600080fd5b50565b6000813590506108458161081f565b92915050565b600060208284031215610861576108606107e8565b5b600061086f84828501610836565b91505092915050565b6000806040838503121561088f5761088e6107e8565b5b600061089d85828601610836565b92505060206108ae85828601610836565b9150509250929050565b60008115159050919050565b6108cd816108b8565b82525050565b60006020820190506108e860008301846108c4565b92915050565b6108f7816108b8565b811461090257600080fd5b50565b600081359050610914816108ee565b92915050565b60008060408385031215610931576109306107e8565b5b600061093f85828601610836565b925050602061095085828601610905565b9150509250929050565b600082825260208201905092915050565b7f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500600082015250565b60006109a1601f8361095a565b91506109ac8261096b565b602082019050919050565b600060208201905081810360008301526109d081610994565b9050919050565b7f526f6c65733a206163636f756e7420697320746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610a3360228361095a565b9150610a3e826109d7565b604082019050919050565b60006020820190508181036000830152610a6281610a26565b9050919050565b7f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c60008201527f6500000000000000000000000000000000000000000000000000000000000000602082015250565b6000610ac560218361095a565b9150610ad082610a69565b604082019050919050565b60006020820190508181036000830152610af481610ab8565b905091905056fea26469706673582212209b9bd0dc51ea42b0d57cda6137bcb26e3195fcce64b594df0fc92e58108dba2164736f6c63430008090033";

type AllowlistMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AllowlistMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AllowlistMock__factory extends ContractFactory {
  constructor(...args: AllowlistMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AllowlistMock> {
    return super.deploy(token, overrides || {}) as Promise<AllowlistMock>;
  }
  override getDeployTransaction(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token, overrides || {});
  }
  override attach(address: string): AllowlistMock {
    return super.attach(address) as AllowlistMock;
  }
  override connect(signer: Signer): AllowlistMock__factory {
    return super.connect(signer) as AllowlistMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AllowlistMockInterface {
    return new utils.Interface(_abi) as AllowlistMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AllowlistMock {
    return new Contract(address, _abi, signerOrProvider) as AllowlistMock;
  }
}
