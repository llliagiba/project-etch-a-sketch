const gridContainerSize = 600;
let rows = 16;

const sketchpad = document.querySelector(".sketchpad");
sketchpad.style.width = sketchpad.style.height = `${gridContainerSize}px`;

function displayGrid() {
    for (let i = 0; i < (rows * rows); i++) {
        const gridCell = document.createElement("div");
        gridCell.style.width = gridCell.style.height = `${(gridContainerSize / rows)}px`;

        gridCell.classList.add("cell");

        sketchpad.appendChild(gridCell);
    }
}

displayGrid();