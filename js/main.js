import { getAllProducts, getAllCategorys, getProduct } from "./module/app.js";
import { gallery } from "./components/gallery.js";
import { category } from "./components/category.js";

let search = document.querySelector("#search");
let container = document.querySelector(".productosContainer");
let categorias = document.querySelector(".categoriascont");



search.addEventListener("change", async(e) => {
    console.log("Buscando...");
    let res = await getAllProducts(e.target.value);
    container.innerHTML = null;
    container.innerHTML += await gallery(res);
});

const addCategorys = async(e) => {
    let res = await getAllCategorys();
    categorias.innerHTML += await category(res);
    search.value = null;
};
addCategorys();



const openDetail = async(element) => {
    console.log("Abriendo...");
    let asin = element.id;
    let product = await getProduct(asin);
    product = product.data.products[0];

    window.localStorage.setItem(asin, JSON.stringify(product));
    window.open("../views/detail.html?asin=" + encodeURIComponent(asin), "_blank");
};
window.openDetail = openDetail;