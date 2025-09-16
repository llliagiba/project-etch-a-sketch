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

const gridCells = document.querySelectorAll(".cell");

gridCells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.classList.add("cell-color");
        cell.classList.add("colored-cell-border");
    });
});
    
