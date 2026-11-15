const NUM_GRID = 256;

const container = document.querySelector(".container");

function createGrids() {
    for (let i = 0; i < NUM_GRID; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
    }
}

createGrids();

function draw(e) {
    console.log(e.target);
    e.target.style.backgroundColor = "red";
}

const grids = document.querySelectorAll(".grid");
grids.forEach(grid => {
    grid.addEventListener("mouseover", draw);
})