export const category = async(res) => {
    let categorias = res.data;
    let plantilla = "";

    categorias.forEach((value, index) => {
        let cName = categorias[index].name;
        plantilla += /*html*/`
        <div class="elemento">
            <img class="categoriaIcon" src="storage/media/category/all.png">
            <p class="categoriaText">${cName}</p>
        </div>
        `;
    });
    return plantilla;
}