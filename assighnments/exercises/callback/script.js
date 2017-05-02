function buyingAClothes(isSuc, isFail) {
    console.log("I bought a clothes")
    var isNice = false;
    if (isNice) {
        isSuc();
        setTimeout  (isSuc, 2000)
    } else {
        isFail();
        setTimeout  (isFail, 2000)
    }
}

function buyingABag() {
    console.log("I bought a bag");



}

function buyingAShoes() {
    console.log("I bought a shoes");
    /*
        setTimeout(callback, 2000)
    */

}

/*function buyingAJewellery() {
    console.log(" I bought a jewellery")
}*/
buyingAClothes(buyingABag, buyingAShoes)
