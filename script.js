let grid = document.querySelector(".grid");
let cell = document.querySelectorAll(".cell");
let colorize = false;

function setUpGrid(gridSize = 16) {
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 2fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 2fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = `#${randomColor()}`;
    });
    grid.appendChild(cell);
  }
}

function newGrid() {
  clearGrid();
  let gridSize = prompt("Please enter grid size between 16 and 100");
  if (gridSize > 100 || gridSize < 16) {
    gridSize = 16;
  }
  setUpGrid(gridSize);
}

function clearGrid() {
  grid.innerHTML = "";
  grid.style = "";
  setUpGrid();
}

function randomColor() {
  let max = 0xffffff;
  let randomNum = Math.floor(Math.random() * max);
  randomNum = randomNum.toString(16);
  let randomColor = randomNum.padStart(6, 0);
  return randomColor;
}

window.onload = () => {
  setUpGrid();
};
