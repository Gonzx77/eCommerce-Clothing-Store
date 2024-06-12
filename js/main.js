let search = document.querySelector("#search");
let container = document.querySelector(".productosContainer");

container.innerHTML = null;

import { getAllProducts } from "./module/app.js";
import { gallery } from "./components/gallery.js";


search.addEventListener("change", async(e) => {
    // console.log(await getAllProducts({search: e.target.value}));
    container.innerHTML += await gallery(e.target.value);
    search.value = null;
});