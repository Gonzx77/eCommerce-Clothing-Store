export const category = async(res) => {
    let categorias = res.data;
    let plantilla = "";

    categorias.forEach((value, index) => {
        plantilla += /*html*/`
        <div class="elemento">
            <img class="categoriaIcon" src="storage/media/category/all.png">
            <p class="categoriaText">Categoria</p>
        </div>
        `;
    });
    return plantilla;
}