/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BlocklistMock,
  BlocklistMockInterface,
} from "../../../contracts/mocks/BlocklistMock";

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
    name: "BlocklistAdminAdded",
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
    name: "BlocklistAdminRemoved",
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
    name: "BlocklistedAdded",
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
    name: "BlocklistedRemoved",
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
    name: "addBlocklistAdmin",
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
    name: "addBlocklisted",
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
    name: "isBlocklistAdmin",
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
    name: "isBlocklisted",
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
    name: "removeBlocklistAdmin",
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
    name: "removeBlocklisted",
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
    name: "renounceBlocklistAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000f7b38038062000f7b8339818101604052810190620000379190620002ed565b6200004981336200005060201b60201c565b506200043a565b620000a7816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206200010560201b620003171790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc52e3252244a1a2a298f7b5a9f8e964ab8737811b620a1426c0b95e3037bba9e60405160405180910390a35050565b620001178282620001b860201b60201c565b156200015a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001519062000380565b60405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200022c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002239062000418565b60405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002b58262000288565b9050919050565b620002c781620002a8565b8114620002d357600080fd5b50565b600081519050620002e781620002bc565b92915050565b60006020828403121562000306576200030562000283565b5b60006200031684828501620002d6565b91505092915050565b600082825260208201905092915050565b7f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500600082015250565b600062000368601f836200031f565b9150620003758262000330565b602082019050919050565b600060208201905081810360008301526200039b8162000359565b9050919050565b7f526f6c65733a206163636f756e7420697320746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000620004006022836200031f565b91506200040d82620003a2565b604082019050919050565b600060208201905081810360008301526200043381620003f1565b9050919050565b610b31806200044a6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a4aa023f1161005b578063a4aa023f14610111578063c428b20214610141578063e323e6711461015d578063ebf42f771461017957610088565b80632c55b05f1461008d5780636c41d4ea146100a95780639bd483ec146100c5578063a28e7c02146100e1575b600080fd5b6100a760048036038101906100a2919061084b565b610195565b005b6100c360048036038101906100be91906108c3565b6101b8565b005b6100df60048036038101906100da919061084b565b6101ec565b005b6100fb60048036038101906100f6919061084b565b61020f565b6040516101089190610912565b60405180910390f35b61012b6004803603810190610126919061084b565b610269565b6040516101389190610912565b60405180910390f35b61015b6004803603810190610156919061084b565b6102c4565b005b6101776004803603810190610172919061092d565b6102e7565b005b610193600480360381019061018e919061084b565b6102f4565b005b816101a0813361020f565b6101a957600080fd5b6101b383836103bf565b505050565b816101c38133610269565b156101cd57600080fd5b81600260006101000a81548160ff021916908315150217905550505050565b816101f7813361020f565b61020057600080fd5b61020a838361046e565b505050565b6000610261826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061051d90919063ffffffff16565b905092915050565b60006102bc82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061051d90919063ffffffff16565b905092915050565b816102cf813361020f565b6102d857600080fd5b6102e283836105e5565b505050565b6102f18133610693565b50565b816102ff813361020f565b61030857600080fd5b6103128383610693565b505050565b610321828261051d565b15610361576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610358906109b7565b60405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61041081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061031790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4eef79dfdff8d6b9485c6a01d5caac6413488fc1036c03867dbf75558a3b3a3660405160405180910390a35050565b6104bf81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061074190919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fd3e42d12ae7dae2e960401c63b158173cc9987f9ee213374eff6471eed4062e360405160405180910390a35050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561058e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058590610a49565b60405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610635816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061031790919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fc52e3252244a1a2a298f7b5a9f8e964ab8737811b620a1426c0b95e3037bba9e60405160405180910390a35050565b6106e3816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061074190919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f2e4e5dc902da1dd9425aa2acf081cc51d589443784af4c3fd7d5fe60d5915cd060405160405180910390a35050565b61074b828261051d565b61078a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078190610adb565b60405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610818826107ed565b9050919050565b6108288161080d565b811461083357600080fd5b50565b6000813590506108458161081f565b92915050565b60008060408385031215610862576108616107e8565b5b600061087085828601610836565b925050602061088185828601610836565b9150509250929050565b60008115159050919050565b6108a08161088b565b81146108ab57600080fd5b50565b6000813590506108bd81610897565b92915050565b600080604083850312156108da576108d96107e8565b5b60006108e885828601610836565b92505060206108f9858286016108ae565b9150509250929050565b61090c8161088b565b82525050565b60006020820190506109276000830184610903565b92915050565b600060208284031215610943576109426107e8565b5b600061095184828501610836565b91505092915050565b600082825260208201905092915050565b7f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500600082015250565b60006109a1601f8361095a565b91506109ac8261096b565b602082019050919050565b600060208201905081810360008301526109d081610994565b9050919050565b7f526f6c65733a206163636f756e7420697320746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610a3360228361095a565b9150610a3e826109d7565b604082019050919050565b60006020820190508181036000830152610a6281610a26565b9050919050565b7f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c60008201527f6500000000000000000000000000000000000000000000000000000000000000602082015250565b6000610ac560218361095a565b9150610ad082610a69565b604082019050919050565b60006020820190508181036000830152610af481610ab8565b905091905056fea2646970667358221220fa48f4eb85dafa6789d6334e5e77f9835f18bb550e3b6788512eb88d8dee458764736f6c63430008090033";

type BlocklistMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BlocklistMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BlocklistMock__factory extends ContractFactory {
  constructor(...args: BlocklistMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BlocklistMock> {
    return super.deploy(token, overrides || {}) as Promise<BlocklistMock>;
  }
  override getDeployTransaction(
    token: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token, overrides || {});
  }
  override attach(address: string): BlocklistMock {
    return super.attach(address) as BlocklistMock;
  }
  override connect(signer: Signer): BlocklistMock__factory {
    return super.connect(signer) as BlocklistMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BlocklistMockInterface {
    return new utils.Interface(_abi) as BlocklistMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BlocklistMock {
    return new Contract(address, _abi, signerOrProvider) as BlocklistMock;
  }
}
