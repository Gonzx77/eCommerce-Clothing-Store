import { getAllProducts, getAllCategorys } from "./module/app.js";
import { gallery } from "./components/gallery.js";
import { category } from "./components/category.js";
import { detail } from "./module/detail.js";

let search = document.querySelector("#search");
let container = document.querySelector(".productosContainer");
let categorias = document.querySelector(".categoriascont");

addEventListener("DOMContentLoaded", async (e) => {
    let data = "";
    if (!localStorage.getItem("getAllProducts",)) localStorage.setItem("Products", JSON.stringify(await getAllProducts()));
    console.log(await getAllProducts(JSON.parse(localStorage.getItem("getAllProducts"))));
});

search.addEventListener("change", async(e) => {
    container.innerHTML = null;
    let res = await getAllProducts({search: e.target.value});
    container.innerHTML += await gallery(res);
    search.value = null;
});

const addCategorys = async(e) => {
    let res = await getAllCategorys();
    categorias.innerHTML += await category(res);
    search.value = null;
};
addCategorys();



export const openDetail = async() => {
    window.open("views/detail.html", "_blank");
    await detail();
};