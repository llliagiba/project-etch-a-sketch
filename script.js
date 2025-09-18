const gridContainerSize = 600;

const sketchpad = document.querySelector(".sketchpad");
const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
const randomColorButton = document.querySelector(".random");

sliderValue.textContent = `${slider.value} x ${slider.value}`;
sketchpad.style.width = sketchpad.style.height = `${gridContainerSize}px`;

function displayGrid(rows) {
    for (let i = 0; i < (rows * rows); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = `${(gridContainerSize / rows)}px`;
        gridCell.classList.add("cell");

        sketchpad.appendChild(gridCell);
    }
}

function colorCells() {
    function generateRandomCode() {
        const random = Math.floor(Math.random() * 256);
        return random;
    }

    let randomClicked;
    randomColorButton.addEventListener("click", () => {
        randomClicked = true;
    });

    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            if (randomClicked) {
                const red = generateRandomCode();
                const green = generateRandomCode();
                const blue = generateRandomCode();

                cell.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.3)`
            } else {
                // might have to change this to style.backgroundColor because user should be able to PCCK a color 
                cell.classList.add("cell-color");
                cell.classList.add("colored-cell-border");
            }
        });
    });
}


function removeGrid() {
    sketchpad.textContent = "";
}

// New grid based on slider value
slider.addEventListener("input", () => {
    removeGrid();
    const newValue = slider.value;
    sliderValue.textContent = `${slider.value} x ${slider.value}`;
    displayGrid(newValue);
    colorCells();
});

// Initial grid: on page load
displayGrid(16);
colorCells();