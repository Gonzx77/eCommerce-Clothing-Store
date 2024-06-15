import { getAllProducts, getAllCategorys, getProduct, getAllProductsByCategory } from "./module/app.js";
import { gallery } from "./components/gallery.js";
import { category } from "./components/category.js";

let search = document.querySelector("#search");
let container = document.querySelector(".productosContainer");
let categorias = document.querySelector(".categoriascont");
let categoryInfo = document.querySelector(".categoryInfo");


let categoryHere = new URLSearchParams(window.location.search);
categoryHere = categoryHere.get("category_id");
categoryInfo.innerHTML = categoryHere;



search.addEventListener("change", async(e) => {
    console.log("Buscando...");
    let category = new URLSearchParams(window.location.search);
    category = category.get("category_id");

    let res = await getAllProductsByCategory(e.target.value, category);
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
    console.log("Abriendo Detail...");
    let asin = element.id;
    let product = await getProduct(asin);
    product = product.data.products[0];

    window.localStorage.setItem(asin, JSON.stringify(product));
    window.open("../views/detail.html?asin=" + encodeURIComponent(asin), "_blank");
};
window.openDetail = openDetail;

const openCategory = async(element) => {
    console.log("Aplicando Categoria...");
    let category = element.id;

    window.location.href = "../index.html?category_id=" + encodeURIComponent(category);
    categoryInfo.innerHTML = category;
};
window.openCategory = openCategory;