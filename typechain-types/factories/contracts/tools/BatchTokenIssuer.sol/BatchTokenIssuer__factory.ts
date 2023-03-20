/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BatchTokenIssuer,
  BatchTokenIssuerInterface,
} from "../../../../contracts/tools/BatchTokenIssuer.sol/BatchTokenIssuer";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "partitions",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "tokenHolders",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "batchIssueByPartition",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506100596040518060400160405280601081526020017f4261746368546f6b656e4973737565720000000000000000000000000000000081525061005e60201b61034a1760201c565b610143565b600160008083604051602001610074919061012c565b60405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600081519050919050565b600081905092915050565b60005b838110156100e65780820151818401526020810190506100cb565b838111156100f5576000848401525b50505050565b6000610106826100b2565b61011081856100bd565b93506101208185602086016100c8565b80840191505092915050565b600061013882846100fb565b915081905092915050565b610c26806101526000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063249cb3fa1461003b578063edec7e151461006b575b600080fd5b6100556004803603810190610050919061043c565b61009b565b604051610062919061048b565b60405180910390f35b610085600480360381019061008091906105b7565b6100f9565b6040516100929190610748565b60405180910390f35b600080600084815260200190815260200160002060009054906101000a900460ff16156100ee576040516020016100d1906107c1565b6040516020818303038152906040528051906020012090506100f3565b600090505b92915050565b6060878073ffffffffffffffffffffffffffffffffffffffff1663aa271e1a336040518263ffffffff1660e01b815260040161013591906107e5565b60206040518083038186803b15801561014d57600080fd5b505afa158015610161573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101859190610838565b6101c4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101bb906108c2565b60405180910390fd5b85859050888890501461020c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020390610954565b60405180910390fd5b838390508888905014610254576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024b906109e6565b60405180910390fd5b60005b8888905081101561033d578973ffffffffffffffffffffffffffffffffffffffff166367c849198a8a8481811061029157610290610a06565b5b905060200201358989858181106102ab576102aa610a06565b5b90506020020160208101906102c09190610a35565b8888868181106102d3576102d2610a06565b5b905060200201356040518463ffffffff1660e01b81526004016102f893929190610aa8565b600060405180830381600087803b15801561031257600080fd5b505af1158015610326573d6000803e3d6000fd5b50505050808061033590610b21565b915050610257565b5050979650505050505050565b6001600080836040516020016103609190610bd9565b60405160208183030381529060405280519060200120815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b600080fd5b600080fd5b6000819050919050565b6103bb816103a8565b81146103c657600080fd5b50565b6000813590506103d8816103b2565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610409826103de565b9050919050565b610419816103fe565b811461042457600080fd5b50565b60008135905061043681610410565b92915050565b600080604083850312156104535761045261039e565b5b6000610461858286016103c9565b925050602061047285828601610427565b9150509250929050565b610485816103a8565b82525050565b60006020820190506104a0600083018461047c565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126104cb576104ca6104a6565b5b8235905067ffffffffffffffff8111156104e8576104e76104ab565b5b602083019150836020820283011115610504576105036104b0565b5b9250929050565b60008083601f840112610521576105206104a6565b5b8235905067ffffffffffffffff81111561053e5761053d6104ab565b5b60208301915083602082028301111561055a576105596104b0565b5b9250929050565b60008083601f840112610577576105766104a6565b5b8235905067ffffffffffffffff811115610594576105936104ab565b5b6020830191508360208202830111156105b0576105af6104b0565b5b9250929050565b60008060008060008060006080888a0312156105d6576105d561039e565b5b60006105e48a828b01610427565b975050602088013567ffffffffffffffff811115610605576106046103a3565b5b6106118a828b016104b5565b9650965050604088013567ffffffffffffffff811115610634576106336103a3565b5b6106408a828b0161050b565b9450945050606088013567ffffffffffffffff811115610663576106626103a3565b5b61066f8a828b01610561565b925092505092959891949750929550565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000819050919050565b6106bf816106ac565b82525050565b60006106d183836106b6565b60208301905092915050565b6000602082019050919050565b60006106f582610680565b6106ff818561068b565b935061070a8361069c565b8060005b8381101561073b57815161072288826106c5565b975061072d836106dd565b92505060018101905061070e565b5085935050505092915050565b6000602082019050818103600083015261076281846106ea565b905092915050565b600081905092915050565b7f455243313832305f4143434550545f4d41474943000000000000000000000000600082015250565b60006107ab60148361076a565b91506107b682610775565b601482019050919050565b60006107cc8261079e565b9150819050919050565b6107df816103fe565b82525050565b60006020820190506107fa60008301846107d6565b92915050565b60008115159050919050565b61081581610800565b811461082057600080fd5b50565b6000815190506108328161080c565b92915050565b60006020828403121561084e5761084d61039e565b5b600061085c84828501610823565b91505092915050565b600082825260208201905092915050565b7f53656e646572206973206e6f74206120746f6b656e206d696e7465722e000000600082015250565b60006108ac601d83610865565b91506108b782610876565b602082019050919050565b600060208201905081810360008301526108db8161089f565b9050919050565b7f706172746974696f6e7320616e6420746f6b656e486f6c64657273206172726160008201527f7973206861766520646966666572656e74206c656e6774687300000000000000602082015250565b600061093e603983610865565b9150610949826108e2565b604082019050919050565b6000602082019050818103600083015261096d81610931565b9050919050565b7f706172746974696f6e7320616e642076616c756573206172726179732068617660008201527f6520646966666572656e74206c656e6774687300000000000000000000000000602082015250565b60006109d0603383610865565b91506109db82610974565b604082019050919050565b600060208201905081810360008301526109ff816109c3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215610a4b57610a4a61039e565b5b6000610a5984828501610427565b91505092915050565b610a6b816106ac565b82525050565b600082825260208201905092915050565b50565b6000610a92600083610a71565b9150610a9d82610a82565b600082019050919050565b6000608082019050610abd600083018661047c565b610aca60208301856107d6565b610ad76040830184610a62565b8181036060830152610ae881610a85565b9050949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610b2c826106ac565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610b5f57610b5e610af2565b5b600182019050919050565b600081519050919050565b60005b83811015610b93578082015181840152602081019050610b78565b83811115610ba2576000848401525b50505050565b6000610bb382610b6a565b610bbd818561076a565b9350610bcd818560208601610b75565b80840191505092915050565b6000610be58284610ba8565b91508190509291505056fea2646970667358221220029da93f92071a3bd57dee87a435b1f56e55727ec743c689179d823555ec28bf64736f6c63430008090033";

type BatchTokenIssuerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BatchTokenIssuerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BatchTokenIssuer__factory extends ContractFactory {
  constructor(...args: BatchTokenIssuerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BatchTokenIssuer> {
    return super.deploy(overrides || {}) as Promise<BatchTokenIssuer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BatchTokenIssuer {
    return super.attach(address) as BatchTokenIssuer;
  }
  override connect(signer: Signer): BatchTokenIssuer__factory {
    return super.connect(signer) as BatchTokenIssuer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BatchTokenIssuerInterface {
    return new utils.Interface(_abi) as BatchTokenIssuerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BatchTokenIssuer {
    return new Contract(address, _abi, signerOrProvider) as BatchTokenIssuer;
  }
}