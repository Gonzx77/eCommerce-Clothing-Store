import { getAllProducts, getAllCategorys } from "./module/app.js";
import { gallery } from "./components/gallery.js";
import { category } from "./components/category.js";

let search = document.querySelector("#search");
let container = document.querySelector(".productosContainer");
let categorias = document.querySelector(".categoriascont");


(async() => {
    console.log("Key añadida");
    const request = indexedDB.open('miBaseDeDatos', 1);
    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        const store = db.createObjectStore('miAlmacen', { keyPath: 'id' });
    };
    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(['miAlmacen'], 'readwrite');
        const store = transaction.objectStore('miAlmacen');
        const objetoJSON = { id: 1, asin: "asin" };
        const request = store.add(objetoJSON);
    };
})();



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
    
    const request = indexedDB.open('miBaseDeDatos', 1);
    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        const store = db.createObjectStore('miAlmacen', { keyPath: 'id' });
    };
    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction(['miAlmacen'], 'readwrite');
        const store = transaction.objectStore('miAlmacen');
        const objetoJSON = { id: 1, asin: asin };
        const request = store.put(objetoJSON);
    };

    window.open("../views/detail.html", "_blank");
};
window.openDetail = openDetail;