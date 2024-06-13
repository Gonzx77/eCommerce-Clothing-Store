export const gallery = async(res) => {
    let products = res.data.products;
    let plantilla = "";

    products.forEach((value, index) => {
        let pName = products[index].product_title;
        let pImg = products[index].product_photo;
        let pPrice = products[index].product_price;
        let pRating = products[index].product_star_rating;
        let pUrl = products[index].product_url;

        plantilla += /*html*/`
        <div onclick="openDetail(${pImg})" class="productCont">
            <img id="likeEmpty" src="storage/media/likeEmpty.svg">
            <img class="productoImg" src="${pImg}">
            <p class="productTitle">${pName}</p>
            <p class="productoDescrip">Teclado</p>
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