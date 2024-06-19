console.log("Se abrio checkout");

let params = new URLSearchParams(window.location.search);
let asin = params.get("asin");


let keys = Object.keys(localStorage);

let filteredKeys = [];
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (key.endsWith("--P")) {
        filteredKeys.push(key);
    }
}

let productsCantidad = document.querySelector("#productsCantidad");
let productsCantidadValue = parseFloat(productsCantidad.textContent);

let subTotal = document.querySelector("#totalN");
let totalDiv = document.querySelector("#totalN2");
totalDiv.innerHTML = 0;

let totalDivValue = parseFloat(totalDiv.textContent);
let container = document.querySelector(".flexgalery");

for (let i = 0; i < filteredKeys.length; i++) {
    let filteredAsin = filteredKeys[i];
    let product = localStorage.getItem(filteredAsin);
    product = JSON.parse(product);

    let pCantidad = product.cantidad;
    let pOriginalPrice = product.product_original_price;
    let pPrice = product.product_price;
    let pRating = product.product_star_rating;
    let pNumRatings = product.product_num_ratings;
    let pName = product.product_title;
    let pImg = product.product_photo;
    let pDescript = product.descript;

    let totalPrice = parseFloat(pPrice.slice(1).replace(',', '.'));
    totalPrice = (totalPrice * pCantidad);


    let plantilla = /*html*/`
        <div class="product">
            <img class="img" src="${pImg}">
            <div class="header">
                <p id="productTitle">${pName}</p>
                <p id="productPrice">$${totalPrice}</p>
            </div>
            <div class="prodcutCount">
                <img id="points" src="../storage/media/menu3points.svg">
                <div class="fondo">
                    <img class="count" src="../storage/media/minusWhite.svg">
                    <p class="number">${pCantidad}</p>
                    <img class="count" src="../storage/media/plusWhite.svg">
                </div>
            </div>
        </div>
        <img class="line" src="../storage/media/line2.svg">
        `;


    totalDivValue += totalPrice;
    productsCantidadValue += pCantidad;

    
    productsCantidad.innerHTML = productsCantidadValue;
    subTotal.innerHTML = `$${totalDivValue}`;
    totalDiv.innerHTML = `$${totalDivValue}`;
    container.innerHTML += plantilla;
}

const openDetail = async() => {
    console.log("Abriendo Detail...");
    window.open("../views/detail.html?asin=" + encodeURIComponent(asin), "_blank");
};
window.openDetail = openDetail;