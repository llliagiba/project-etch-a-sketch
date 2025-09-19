const gridContainerSize = 600;

const sketchpad = document.querySelector(".sketchpad");
const sliderContainer = document.querySelector(".slider-container");
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
const colorPickerButton = document.querySelector(".color");
const randomColorButton = document.querySelector(".random");
const shadeButton = document.querySelector(".shade");

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

function removeGrid() {
    sketchpad.textContent = "";
}

function colorCells() {
    function generateRandomCode() {
        const random = Math.floor(Math.random() * 256);
        return random;
    }

    let colorClicked;
    colorPickerButton.addEventListener("click", () => {
        colorClicked = true;
        randomClicked = false;
        shadeClicked = false;
    });

    let randomClicked;
    randomColorButton.addEventListener("click", () => {
        randomClicked = true;
        colorClicked = false;
        shadeClicked = false;
    });

    let shadeClicked;
    shadeButton.addEventListener("click", () => {
        shadeClicked = true;
        colorClicked = false;
        randomClicked = false;
    });

    const gridCells = document.querySelectorAll(".cell");
    gridCells.forEach((cell) => {
        let opacity = 0;
        cell.addEventListener("mouseover", () => {
            if (randomClicked) {
                const red = generateRandomCode();
                const green = generateRandomCode();
                const blue = generateRandomCode();

                cell.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.3)`;
            } else if (shadeClicked) {
                if (opacity > 1) {
                    opacity = 1;
                } else {
                    opacity += 0.1;
                }
                cell.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            } else {
                // might have to change this to style.backgroundColor because user should be able to PICK a color 
                cell.classList.add("cell-color");
                cell.classList.add("colored-cell-border");
            }
        });
    });
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

