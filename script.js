const gridContainerSize = 600;

const sketchpad = document.querySelector(".sketchpad");
const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
const colorPicker = document.querySelector(".color-picker");
const randomColorButton = document.querySelector(".random");
const shadeButton = document.querySelector(".shade");
const eraseButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear-sketchpad");
let mode = "color";

colorPicker.addEventListener("click", () => {
    mode = "color";
});

randomColorButton.addEventListener("click", () => {
    mode = "random";
});

shadeButton.addEventListener("click", () => {
    mode = "shade";
});

eraseButton.addEventListener("click", () => {
    mode = "erase";
});

clearButton.addEventListener("click", () => {
    mode = "clear";
    removeGrid();
    displayGrid(slider.value);
    colorCells();
});

function displayGrid(rows) {
    for (let i = 0; i < (rows * rows); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = `${(gridContainerSize / rows)}px`;
        gridCell.classList.add("cell");

        sketchpad.appendChild(gridCell);
    }
}

function removeGrid() {
    sketchpad.textContent = "";
}

function generateRandomColorCode() {
        const random = Math.floor(Math.random() * 256);
        return random;
    }

function colorCells() {
    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach((cell) => {
        let opacity = 0;
        cell.addEventListener("mouseover", () => {
            if (mode === "color") {
                const colorHexCode = colorPicker.value;
                cell.style.backgroundColor = `${colorHexCode}`;
                cell.classList.add("colored-cell-border");
            } else if (mode === "random") {
                const red = generateRandomColorCode();
                const green = generateRandomColorCode();
                const blue = generateRandomColorCode();

                cell.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.5)`;
                cell.classList.add("colored-cell-border");
            } else if (mode === "shade") {
                if (opacity > 1) {
                    opacity = 1;
                } else {
                    opacity += 0.1;
                }
                cell.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
                cell.classList.add("colored-cell-border");
            } else if (mode === "erase") {
                cell.style.backgroundColor = 'rgb(255, 255, 255)';
                cell.style.border = '1px solid rgb(0, 0, 0, 0.2)';
            }
        });
    });
}

// Initial grid: on page load
displayGrid(slider.value);
colorCells();

sliderValue.textContent = `${slider.value} x ${slider.value}`;

sketchpad.style.width = sketchpad.style.height = `${gridContainerSize}px`;

// New grid: based on slider value
slider.addEventListener("input", () => {
    removeGrid();
    const newValue = slider.value;
    sliderValue.textContent = `${newValue} x ${newValue}`;
    displayGrid(newValue);
    colorCells();
});


