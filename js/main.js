import { getAllProducts } from "./module/app.js";
import { gallery } from "./components/gallery.js";

let search = document.querySelector("#search");
let container = document.querySelector(".productosContainer");

container.innerHTML = null;

search.addEventListener("change", async(e) => {
    let res = await getAllProducts({search: e.target.value});
    container.innerHTML += await gallery(res);
    search.value = null;
});