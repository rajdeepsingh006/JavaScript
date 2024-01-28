// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _sunglasses, _shirtType, _accessories) {

    const NFT = {
        "Name": _name,
        "Sunglasses": _sunglasses,
        "ShirtType": _shirtType,
        "Accessories": _accessories
    }

    NFTs.push(NFT);

    console.log("NFT minted Successfully!!!");

    console.log("The minted NFT is " + _name + ".\n");


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nNFT ID:\t" + (i + 1));
        console.log("\nName:\t\t" + NFTs[i].Name);
        console.log("Sunglasses:\t" + NFTs[i].Sunglasses);
        console.log("Shirt Type:\t" + NFTs[i].ShirtType);
        console.log("Accessories:\t" + NFTs[i].Accessories);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nThe total NFT supply is " + NFTs.length + ".");
}
mintNFT("Raj", "Aviators", "Checked", "Watch");
mintNFT("Param", "Rayban", "Hoddie", "Ring");
mintNFT("Deepu", "Heart", "Coat", "Bracelet");
mintNFT("Veenu", "Round", "Blazer", "Chain");
listNFTs();
getTotalSupply();
