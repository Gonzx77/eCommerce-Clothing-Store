export const category = async(res) => {
    let categorias = res.data;
    let plantilla = "";

    categorias.forEach((value, index) => {
        let cName = categorias[index].name;
        let cId = categorias[index].id;
        plantilla += /*html*/`
        <div class="elemento" onclick="openCategory(this)" id="${cId}">
            <img class="categoriaIcon" src="storage/media/category/all.png">
            <p class="categoriaText">${cName}</p>
        </div>
        `;
    });
    return plantilla;
}