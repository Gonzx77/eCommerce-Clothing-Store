export const gallery = async(text) => {
    return /*html*/`
    <div class="productCont">
        <img id="likeEmpty" src="storage/media/likeEmpty.svg">
        <img class="productoImg" src="storage/media/images/Tec1.png">
        <p class="productTitle">${text}</p>
        <p class="productoDescrip">Teclado</p>
        <p class="productoPrice">$240.000</p>
        <div class="productoRating">
            <img class="ratingImg" src="storage/media/star.svg">
            <p class="rating">5.0</p>
        </div>
    </div>
    `;
}