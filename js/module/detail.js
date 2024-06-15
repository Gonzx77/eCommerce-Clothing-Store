document.addEventListener("DOMContentLoaded", function() {
    console.log("Maquetando...");

    let containerDetail = document.querySelector("#containerDetail");
    let indexBody = document.querySelector("#detailBody");
    

    let params = new URLSearchParams(window.location.search);
    params = params.get("asin");

    let product = localStorage.getItem(params);
    product = JSON.parse(product);

    let pOriginalPrice = product.product_original_price;
    let pPrice = product.product_price;
    let pRating = product.product_star_rating;
    let pNumRatings = product.product_num_ratings;
    let pName = product.product_title;
    let pImg = product.product_photo;

    let plantilla = /*html*/`
        <div class="container1">
            <div class="imgcontainer">
                <img id="like" src="../storage/media/likeEmpty.svg">
                <img id="img" src="${pImg}">
                <img onclick="window.location.href = '../index.html'" id="back" src="../storage/media/back.svg">
            </div>
        </div>
        <div class="container">
            <div class="infocontainer">
                <div class="gridTitle">
                    <div class="gridTitleItem">
                        <p id="productoTitle">${pName}</p>
                    </div>
                    <div class="gridTitleItem2">
                        <div class="countContainer">
                            <img class="countItem" src="../storage/media/countMinus.svg">
                            <p id="countNumber">1</p>
                            <img class="countItem" src="../storage/media/countMore.svg">
                        </div>
                    </div>
                </div>
                <div class="reviews">
                    <img id="stars" src="../storage/media/stars.svg">
                    <p id="rerviewsText">${pRating} <span id="blue">(${pNumRatings} reseñas)</span></p>
                </div>

                <p id="descript">${pName}</p>
            
                <img id="line" src="../storage/media/line.svg">

                <div class="optionscontainer">
                    <div class="tallas">
                        <p id="chooseSize">Tamaños</p>
                        <div class="sizes">
                            <img class="sizesOptions" src="../storage/media/sizeS.svg">
                            <img class="sizesOptions" src="../storage/media/sizeM.svg">
                            <img class="sizesOptions" src="../storage/media/sizeL.svg">
                            <img class="sizesOptions" src="../storage/media/sizeXL.svg">
                        </div>
                    </div>
                    <div class="colors">
                        <p id="chooseSize">Colores</p>
                        <div class="sizes">
                            <img class="colorsOptions" src="../storage/media/color1.svg">
                            <img class="colorsOptions" src="../storage/media/color2.svg">
                            <img class="colorsOptions" src="../storage/media/color3.svg">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;

    let plantilla2 = /*html*/`    
    <div onclick="window.location.href = 'checkout.html'" class="navigationBar">
        <img src="../storage/media/shopping-cart.svg">
        <p id="cartText">Añadir al carro | ${pPrice} <span id="tachado">${pOriginalPrice}</span></p>
    </div>

    `;

    containerDetail.innerHTML += plantilla;
    indexBody.innerHTML += plantilla2;
});