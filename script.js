const NUM_GRID = 256;

const container = document.querySelector(".container");

function createGrids() {
    for (let i = 0; i < NUM_SQUARES; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
    }
}
