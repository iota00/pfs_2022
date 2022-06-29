
const hre = require("hardhat");
const fs = require("fs")
async function main() {
  // Deploy and get the address of the marketplace contract
  const CrisisMarket = await hre.ethers.getContractFactory("CrisisMarket");
  const crisisMarket = await CrisisMarket.deploy();

  await crisisMarket.deployed();

  console.log("CrisisMarket deployed to:", crisisMarket.address);

  // Deploy and get the address of the NFT contract

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(crisisMarket.address); // needs to have the address

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  // define the data to export and add to the config file
  let config =
`
export const nftMarketAddress = '${crisisMarket.address}'
export const nftAddress = '${nft.address}'
`
  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
