import { ethers } from "hardhat";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
// import { addressFromNumber, expandTo18Decimals } from "./utilities/utilities";
import { ERC1400,ERC1400__factory,ERC20,ERC20__factory,ERC18} from "../typechain-types";

describe("Uniswap",async()=>{
    let owner:SignerWithAddress;
    let signers:SignerWithAddress[];
    let user1:SignerWithAddress;
    let user2:SignerWithAddress;
    let erc1400:ERC1400;
    let erc20:ERC20;
    let erc1820:ERC1820;
    beforeEach("initialize",async()=>{
    signers=await ethers.getSigners();

    owner=signers[0];
    user1=signers[1];
    user2=signers[2];
    const partition1_short ="0x7265736572766564000000000000000000000000000000000000000000000000";
    const partition2_short ="0x6973737565640000000000000000000000000000000000000000000000000000";
    const partition3_short ="0x6c6f636b65640000000000000000000000000000000000000000000000000000";
    const partitions=[partition1_short,partition2_short,partition3_short];
    const controller=[user1.address,user2.address];
    //  erc1400.registry = await ERC1820Registry.at("0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24");
    erc20=await new ERC20__factory(owner).deploy("1400","erc14");

    console.log("hell");
    // erc1400=await  new ERC1400__factory(owner).deploy("DigitalSecurityToken","DST",1,controller,partitions,{gasLimit:622892});
    console.log("hello");
    })
    describe("test",async()=>{
        it("first test",async()=>{
            console.log("hello");
        })
    })
})
 