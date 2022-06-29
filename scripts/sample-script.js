const hre = require("hardhat");
const fs = require("fs")
async function main() {
  // Deploy and get the address of the marketplace contract
  const Market = await hre.ethers.getContractFactory("Market");
  const market = await Market.deploy();

  await market.deployed();

  console.log("Market deployed to:", market.address);

  // Deploy and get the address of the NFT contract

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(market.address); // needs to have the address

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  // define the data to export and add to the config file
  let config =
`
export const nftMarketAddress = '${market.address}'
export const nftAddress = '${nft.address}'
`
  let data = JSON.stringify(config)
  fs.writeFileSync('src/config.js', JSON.parse(data))

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
