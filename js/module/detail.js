import { getProduct } from "./app.js";

let containerDetail = document.querySelector("#containerDetail");

const request = indexedDB.open('miBaseDeDatos', 1);
request.onsuccess = function(event) {
    const db = event.target.result;
    const transaction = db.transaction(['miAlmacen'], 'readwrite');
    const store = transaction.objectStore('miAlmacen');
    const getRequest = store.get(1);
    const deleteRequest = store.delete(1);
    getRequest.onsuccess = function(event) {
        const objeto = event.target.result;
        console.log(objeto.nombre);
    };
};

const detailAdd = async(element) => {
    console.log("Entro");
    let asin = element.id;

    let product = await getProduct(asin);
    product = product.data.products[0];

    let pRating = product.product_star_rating;
    let pNumRatings = product.product_num_ratings;
    let pName = product.product_title;
    let pImg = product.product_photo;

    let plantilla = /*html*/`
        <div class="container1">
            <div class="imgcontainer">
                <img id="like" src="${pImg}">
                <img id="img" src="">
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

                <p id="descript">El Auricular Logitech G435 ofrece una gran experiencia de audio especialmente para <span id="red">Videojuego</span>,
                    su diseño comodo y liviano ofrece una comodidad unica a la hora de Jugar o escuchar musica <span id="readMore">LeerMas...</span></p>
            
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

    containerDetail.innerHTML += plantilla;
};