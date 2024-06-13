export const detail = async() => {

    plantilla += /*html*/`
    <div class="imgcontainer">
        <img id="like" src="../storage/media/likeinvert.svg">
        <img id="img" src="">
        <img onclick="window.location.href = '../index.html'" id="back" src="../storage/media/back.svg">
    </div>
    `;
    return plantilla;
};