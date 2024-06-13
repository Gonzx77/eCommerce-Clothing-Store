import { getAllProducts, getAllCategorys } from "./module/app.js";
import { gallery } from "./components/gallery.js";
import { category } from "./components/category.js";
import { detail } from "./module/detail.js";

let search = document.querySelector("#search");
let container = document.querySelector(".productosContainer");
let categorias = document.querySelector(".categoriascont");



search.addEventListener("change", async(e) => {
    container.innerHTML = null;
    let res = await getAllProducts(e.target.value);
    container.innerHTML += await gallery(res);
});

const addCategorys = async(e) => {
    let res = await getAllCategorys();
    categorias.innerHTML += await category(res);
    search.value = null;
};
addCategorys();



const openDetail = async() => {
    window.open("../views/detail.html", "_blank");
    await detail();
};

window.openDetail = openDetail;