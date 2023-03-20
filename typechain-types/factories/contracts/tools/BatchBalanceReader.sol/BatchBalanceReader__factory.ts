/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BatchBalanceReader,
  BatchBalanceReaderInterface,
} from "../../../../contracts/tools/BatchBalanceReader.sol/BatchBalanceReader";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokenHolders",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
    ],
    name: "balancesOf",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokenHolders",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
      {
        internalType: "bytes32[]",
        name: "partitions",
        type: "bytes32[]",
      },
    ],
    name: "balancesOfByPartition",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "interfaceHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "canImplementInterfaceForAddress",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
    ],
    name: "totalSupplies",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "partitions",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "tokenAddresses",
        type: "address[]",
      },
    ],
    name: "totalSuppliesByPartition",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506200005d6040518060400160405280601281526020017f426174636842616c616e636552656164657200000000000000000000000000008152506200006360201b620008aa1760201c565b62000155565b6001600080836040516020016200007b91906200013c565b60405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600081519050919050565b600081905092915050565b60005b83811015620000ef578082015181840152602081019050620000d2565b83811115620000ff576000848401525b50505050565b60006200011282620000b9565b6200011e8185620000c4565b935062000130818560208601620000cf565b80840191505092915050565b60006200014a828462000105565b915081905092915050565b61113580620001656000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631929e0091461005c578063249cb3fa1461008c578063a09640ec146100bc578063dd2e4bb5146100ec578063feeef1e61461011c575b600080fd5b610076600480360381019061007191906109c3565b61014c565b6040516100839190610b0c565b60405180910390f35b6100a660048036038101906100a19190610bc2565b610306565b6040516100b39190610c11565b60405180910390f35b6100d660048036038101906100d19190610c2c565b610364565b6040516100e39190610b0c565b60405180910390f35b61010660048036038101906101019190610cad565b61052c565b6040516101139190610b0c565b60405180910390f35b61013660048036038101906101319190610cfa565b61066e565b6040516101439190610b0c565b60405180910390f35b6060600083839050868690506101629190610ddd565b67ffffffffffffffff81111561017b5761017a610e37565b5b6040519080825280602002602001820160405280156101a95781602001602082028036833780820191505090505b509050600080600090505b858590508110156102f85760005b888890508110156102e4578089899050836101dd9190610ddd565b6101e79190610e66565b92508686838181106101fc576101fb610ebc565b5b90506020020160208101906102119190610eeb565b73ffffffffffffffffffffffffffffffffffffffff1663a26734dc8a8a8481811061023f5761023e610ebc565b5b905060200201356040518263ffffffff1660e01b81526004016102629190610c11565b60206040518083038186803b15801561027a57600080fd5b505afa15801561028e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b29190610f44565b8484815181106102c5576102c4610ebc565b5b60200260200101818152505080806102dc90610f71565b9150506101c2565b5080806102f090610f71565b9150506101b4565b508192505050949350505050565b600080600084815260200190815260200160002060009054906101000a900460ff16156103595760405160200161033c90611011565b60405160208183030381529060405280519060200120905061035e565b600090505b92915050565b60606000838390508686905061037a9190610ddd565b67ffffffffffffffff81111561039357610392610e37565b5b6040519080825280602002602001820160405280156103c15781602001602082028036833780820191505090505b509050600080600090505b8787905081101561051e5760005b8686905081101561050a578087879050836103f59190610ddd565b6103ff9190610e66565b925086868281811061041457610413610ebc565b5b90506020020160208101906104299190610eeb565b73ffffffffffffffffffffffffffffffffffffffff166370a082318a8a8581811061045757610456610ebc565b5b905060200201602081019061046c9190610eeb565b6040518263ffffffff1660e01b81526004016104889190611035565b60206040518083038186803b1580156104a057600080fd5b505afa1580156104b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d89190610f44565b8484815181106104eb576104ea610ebc565b5b602002602001018181525050808061050290610f71565b9150506103da565b50808061051690610f71565b9150506103cc565b508192505050949350505050565b606060008383905067ffffffffffffffff81111561054d5761054c610e37565b5b60405190808252806020026020018201604052801561057b5781602001602082028036833780820191505090505b50905060005b848490508110156106635784848281811061059f5761059e610ebc565b5b90506020020160208101906105b49190610eeb565b73ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156105f957600080fd5b505afa15801561060d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106319190610f44565b82828151811061064457610643610ebc565b5b602002602001018181525050808061065b90610f71565b915050610581565b508091505092915050565b606060008787905084849050878790506106889190610ddd565b6106929190610ddd565b67ffffffffffffffff8111156106ab576106aa610e37565b5b6040519080825280602002602001820160405280156106d95781602001602082028036833780820191505090505b509050600080600090505b8989905081101561089a5760005b888890508110156108865760005b878790508110156108725780888890508361071b9190610ddd565b898990508c8c905061072d9190610ddd565b856107389190610ddd565b6107429190610e66565b61074c9190610e66565b935089898381811061076157610760610ebc565b5b90506020020160208101906107769190610eeb565b73ffffffffffffffffffffffffffffffffffffffff166330e828038989848181106107a4576107a3610ebc565b5b905060200201358e8e878181106107be576107bd610ebc565b5b90506020020160208101906107d39190610eeb565b6040518363ffffffff1660e01b81526004016107f0929190611050565b60206040518083038186803b15801561080857600080fd5b505afa15801561081c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108409190610f44565b85858151811061085357610852610ebc565b5b602002602001018181525050808061086a90610f71565b915050610700565b50808061087e90610f71565b9150506106f2565b50808061089290610f71565b9150506106e4565b5081925050509695505050505050565b6001600080836040516020016108c091906110e8565b60405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261092d5761092c610908565b5b8235905067ffffffffffffffff81111561094a5761094961090d565b5b60208301915083602082028301111561096657610965610912565b5b9250929050565b60008083601f84011261098357610982610908565b5b8235905067ffffffffffffffff8111156109a05761099f61090d565b5b6020830191508360208202830111156109bc576109bb610912565b5b9250929050565b600080600080604085870312156109dd576109dc6108fe565b5b600085013567ffffffffffffffff8111156109fb576109fa610903565b5b610a0787828801610917565b9450945050602085013567ffffffffffffffff811115610a2a57610a29610903565b5b610a368782880161096d565b925092505092959194509250565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b610a8381610a70565b82525050565b6000610a958383610a7a565b60208301905092915050565b6000602082019050919050565b6000610ab982610a44565b610ac38185610a4f565b9350610ace83610a60565b8060005b83811015610aff578151610ae68882610a89565b9750610af183610aa1565b925050600181019050610ad2565b5085935050505092915050565b60006020820190508181036000830152610b268184610aae565b905092915050565b6000819050919050565b610b4181610b2e565b8114610b4c57600080fd5b50565b600081359050610b5e81610b38565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b8f82610b64565b9050919050565b610b9f81610b84565b8114610baa57600080fd5b50565b600081359050610bbc81610b96565b92915050565b60008060408385031215610bd957610bd86108fe565b5b6000610be785828601610b4f565b9250506020610bf885828601610bad565b9150509250929050565b610c0b81610b2e565b82525050565b6000602082019050610c266000830184610c02565b92915050565b60008060008060408587031215610c4657610c456108fe565b5b600085013567ffffffffffffffff811115610c6457610c63610903565b5b610c708782880161096d565b9450945050602085013567ffffffffffffffff811115610c9357610c92610903565b5b610c9f8782880161096d565b925092505092959194509250565b60008060208385031215610cc457610cc36108fe565b5b600083013567ffffffffffffffff811115610ce257610ce1610903565b5b610cee8582860161096d565b92509250509250929050565b60008060008060008060608789031215610d1757610d166108fe565b5b600087013567ffffffffffffffff811115610d3557610d34610903565b5b610d4189828a0161096d565b9650965050602087013567ffffffffffffffff811115610d6457610d63610903565b5b610d7089828a0161096d565b9450945050604087013567ffffffffffffffff811115610d9357610d92610903565b5b610d9f89828a01610917565b92509250509295509295509295565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610de882610a70565b9150610df383610a70565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610e2c57610e2b610dae565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000610e7182610a70565b9150610e7c83610a70565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610eb157610eb0610dae565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610f0157610f006108fe565b5b6000610f0f84828501610bad565b91505092915050565b610f2181610a70565b8114610f2c57600080fd5b50565b600081519050610f3e81610f18565b92915050565b600060208284031215610f5a57610f596108fe565b5b6000610f6884828501610f2f565b91505092915050565b6000610f7c82610a70565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610faf57610fae610dae565b5b600182019050919050565b600081905092915050565b7f455243313832305f4143434550545f4d41474943000000000000000000000000600082015250565b6000610ffb601483610fba565b915061100682610fc5565b601482019050919050565b600061101c82610fee565b9150819050919050565b61102f81610b84565b82525050565b600060208201905061104a6000830184611026565b92915050565b60006040820190506110656000830185610c02565b6110726020830184611026565b9392505050565b600081519050919050565b60005b838110156110a2578082015181840152602081019050611087565b838111156110b1576000848401525b50505050565b60006110c282611079565b6110cc8185610fba565b93506110dc818560208601611084565b80840191505092915050565b60006110f482846110b7565b91508190509291505056fea2646970667358221220e82d4bc8d376f052e1f6905205b05773ecb294ee5722d21f25c69467e2b7394564736f6c63430008090033";

type BatchBalanceReaderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BatchBalanceReaderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BatchBalanceReader__factory extends ContractFactory {
  constructor(...args: BatchBalanceReaderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BatchBalanceReader> {
    return super.deploy(overrides || {}) as Promise<BatchBalanceReader>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BatchBalanceReader {
    return super.attach(address) as BatchBalanceReader;
  }
  override connect(signer: Signer): BatchBalanceReader__factory {
    return super.connect(signer) as BatchBalanceReader__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BatchBalanceReaderInterface {
    return new utils.Interface(_abi) as BatchBalanceReaderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BatchBalanceReader {
    return new Contract(address, _abi, signerOrProvider) as BatchBalanceReader;
  }
}
