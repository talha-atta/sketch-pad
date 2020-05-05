const drawModes = { black: "BLACK", rainbow: "RAINBOW" };
const container = document.getElementsByClassName("canvas")[0];

//Starting variables on page load
let count = 16;
let mode = drawModes.black;
let size = container.clientHeight / count;

//Function to draw grid
const drawGrid = (root, count, size) => {
  for (let i = 0; i < count; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < count; j++) {
      const column = document.createElement("div");
      column.id = j;
      column.addEventListener("mouseenter", drawBoxes);
      column.classList.add("column");
      column.style.cssText = `width: ${size}px; height: ${size}px;`;
      row.appendChild(column);
    }
    row.classList.add("row");
    root.appendChild(row);
  }
};

//Function that allows user to color boxes
const drawBoxes = (e) => {
  if (mode === drawModes.black) {
    e.target.style.cssText += "background-color: black;";
  }
};

const resetGrid = () => {
  count = prompt("New size of grid?", 16);
  console.log(count);
  if (count < 1 || Number.isNaN(count) || count === undefined) count = 1;
  clearGrid(container);
  size = container.clientHeight / count;
  drawGrid(container, count, size);
};

const clearGrid = (root) => {
  while (root.firstChild) {
    root.removeChild(root.lastChild);
  }
};

drawGrid(container, count, size);

// const clearGrid = (root) => {
//   while (root.firstChild) {
//     root.removeChild(root.lastChild);
//   }
// };

// const drawNewGrid = () => {
//   count = parseInt(prompt("New size of the grid?", "16"));
//   console.log(count);
//   if (count < 1 || Number.isNaN(count)) count = 1;
//   clearGrid(container);
//   size = container.clientHeight / count;
//   drawGrid(container, count, size);
// };

// const onMove = (e) => {
//   if (mode === drawModes.black) {
//     e.target.style.cssText += "background-color: black;";
//   } else {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     let randomColor = `background-color: rgb(${red},${green},${blue});`;
//     e.target.style.cssText += randomColor;
//   }
// };
