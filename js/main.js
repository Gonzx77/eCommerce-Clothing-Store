import { getAllProducts, getAllCategorys } from "./module/app.js";
import { gallery } from "./components/gallery.js";
import { category } from "./components/category.js";

let search = document.querySelector("#search");
let container = document.querySelector(".productosContainer");
let categorias = document.querySelector(".categoriascont");



search.addEventListener("change", async(e) => {
    let res = await getAllProducts(e.target.value);
    container.innerHTML += await gallery(res);
});

const addCategorys = async(e) => {
    let res = await getAllCategorys();
    categorias.innerHTML += await category(res);
    search.value = null;
};
addCategorys();



const openDetail = async(element) => {
    const request = indexedDB.open('miBaseDeDatos', 1);
    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        const store = db.createObjectStore('miAlmacen', { keyPath: 'id' });
    };
    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(['miAlmacen'], 'readwrite');
        const store = transaction.objectStore('miAlmacen');
        const objetoJSON = { id: 1, nombre: 'Andres' };
        const request = store.add(objetoJSON);
    };

    window.open("../views/detail.html", "_blank");
};
window.openDetail = openDetail;