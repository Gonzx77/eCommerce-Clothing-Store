export const gallery = async(res, categoryHere) => {
    let products = res.data.products;
    let plantilla = "";

    products.forEach((value, index) => {
        let asin = products[index].asin;
        let pName = products[index].product_title;
        let pImg = products[index].product_photo;
        let pPrice = products[index].product_price;
        let pRating = products[index].product_star_rating;

        plantilla += /*html*/`
        <div onclick="openDetail(this)" class="productCont" id="${asin}">
            <img id="likeEmpty" src="storage/media/likeEmpty.svg">
            <img class="productoImg" src="${pImg}">
            <p class="productTitle">${pName}</p>
            <p class="productoDescrip">${categoryHere}</p>
            <p class="productoPrice">${pPrice}</p>
            <div class="productoRating">
                <img class="ratingImg" src="storage/media/star.svg">
                <p class="rating">${pRating}</p>
            </div>
        </div>
        `;
    });
    return plantilla;
}