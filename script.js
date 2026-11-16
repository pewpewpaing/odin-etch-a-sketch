const container = document.querySelector(".container");
const button = document.querySelector("button");
const grids = document.querySelectorAll(".grid");

const MAX_SQUARES_PER_SIDE = 100;
const INITIAL_SQUARES_PER_SIDE = 16;
const TOTAL_SPACE = 960;
const BORDER_SIZE = 1;

function createGrid(num_grids) {
    for (let i = 0; i < num_grids * num_grids; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = `${(TOTAL_SPACE / num_grids) - BORDER_SIZE}px`;
        grid.style.height = `${(TOTAL_SPACE / num_grids) - BORDER_SIZE}px`;
        grid.addEventListener("mouseover", draw);
        container.appendChild(grid);
    }
}

function draw(e) {
    const red = randomRGB();
    const green = randomRGB();
    const blue = randomRGB();
    let opacity;
    if (!e.target.style.opacity) {
        opacity = 0.0;
    } else {
        opacity = parseFloat(e.target.style.opacity);
    }

    if (opacity < 1) {
        opacity += 0.1;
    }
    e.target.style.opacity = opacity;
    e.target.style.backgroundColor = `rgba(${red}, ${green}, ${blue})`;
}

function clearGrid() {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

button.addEventListener("click", () => {
    let num_grids;
    do {
        num_grids = +prompt("Number of squares per side?");
    }
    while (num_grids > MAX_SQUARES_PER_SIDE);

    clearGrid();
    createGrid(num_grids);
});

createGrid(INITIAL_SQUARES_PER_SIDE);