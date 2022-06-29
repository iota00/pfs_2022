
const { expect } = require('chai')
const { ethers } = require('hardhat')

describe('NFT Market', function () {
  it('Should mint and trade NFTs', async function () {
    // This comes from the artifacts - ABI - when compiling the contract
    // test to recieve contracts addresses
    const Market = await ethers.getContractFactory('Market')
    //console.log({Market})
    const market = await Market.deploy()
    await market.deployed()
    const marketAddress = market.address

    // NFT
    const NFT = await ethers.getContractFactory('NFT')
    const nft = await NFT.deploy(marketAddress)
    await nft.deployed()
    const nftContractAddress = nft.address

    // test to receive listingPrice && auctionPrice
    let listingPrice = await market.getListingPrice()
    listingPrice = listingPrice.toString()
    const auctionPrice = ethers.utils.parseUnits('100', 'ether')

    // test for minting

    await nft.mintToken('http-t1')
    await nft.mintToken('http-t2')

    await market.makeMarketItem(nftContractAddress, 1, auctionPrice, {
      value: listingPrice,
    })
    await market.makeMarketItem(nftContractAddress, 2, auctionPrice, {
      value: listingPrice,
    })

    // test for different address for different users - test accounts
    // return array of however many address
    // Just to note the order for this array has been changed in the package, so what you see is the old way, that why i used '_' variable instead of 'buyedAddress' variable
    const [_, buyerAddress] = await ethers.getSigners()

    // console.log({ _, buyerAddress })
    // create a market salle with address, id and price
    await market.connect(_).createMarketSale(nftContractAddress, 1, {
      value: auctionPrice,
    })

    let items = await market.fetchMarketTokens()
    items = await Promise.all(
      items.map(async (i) => {
        // get the URI value
        const tokenUri = await nft.tokenURI(i.tokenId)
        let item = {
          price: i.price.toString(),
          tokenId: i.tokenId.toString(),
          seller: i.seller,
          owner: i.owner,
          tokenUri,
        }
        return item
      }),
    )
    // test out all the items
    console.log('items: ', items)
  })
})