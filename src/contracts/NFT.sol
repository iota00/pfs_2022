//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

// openzeppeline ERC72 NFT
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT  is ERC721URIStorage{
    using Counters for Counters.Counter;
    // Counters to allow us keep track of tokenIds
    Counters.Counter private _tokenIds;
    // address of Marketplace for NTFs to interact  with
    address contractAddress;

    // OBJ: give the NFT market the ability to transact with tokens, change ownership 
    // setApprovalForAll allows us  to that with the contract address

    // Constructor to setup our address
    constructor(address marketplaceAddress) ERC721('KryptCrisis Token','CRISI5') { // set the "name" and "symbol"
        contractAddress = marketplaceAddress;
    }

    //  mint token
    function mintToken(string memory tokenURI) public returns(uint) {
        _tokenIds.increment(); // +1
        // keep track of how many Ids
        uint256 newItemId = _tokenIds.current(); // get the current value
       
        _mint(msg.sender, newItemId);
        // set the token URI: takes id, URI
        _setTokenURI(newItemId, tokenURI);
        //  Give the marketplace the approval to transact between users: takes the @contract, boolean
        setApprovalForAll(contractAddress, true);
        
        //mint the token and set it  for sale - return the id to do so
        return newItemId;

        

    }



}
