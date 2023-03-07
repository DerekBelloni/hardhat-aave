const { getNamedAccounts, ethers } = require("hardhat");

// @ts-ignore
const AMOUNT = ethers.utils.parseEther("0.1");

async function getWeth() {
    const { deployer } = await getNamedAccounts();
    // call the 'deposit' function on the weth contract
    // need abi, contract address
    // 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
    const iWeth = await ethers.getContractAt(
        "IWeth",
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        deployer
    );
    // deposit some amount
    const tx = await iWeth.deposit({ value: AMOUNT });
    // wait for the block to be mined
    await tx.wait(1);
    // get weth balance
    const wethBalance = await iWeth.balanceOf(deployer);
    console.log(`Got ${wethBalance.toString()} WETH`);
}

module.exports = { getWeth, AMOUNT };
