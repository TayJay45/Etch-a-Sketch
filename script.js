let grid = document.querySelector(".grid");

// build grid
for (i = 0; i < 256; i++) {
  let div = document.createElement("div");
  div.classList.add("cell");
  div.addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "black";
  });
  grid.appendChild(div);
}

function newGrid() {
  let gridSize = prompt("Please enter grid size between 16 and 100");
  resetGrid(gridSize);
}

function resetGrid(gridSize) {
  for (i = 0; i < gridSize; i++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    grid.appendChild(div);
  }
}
