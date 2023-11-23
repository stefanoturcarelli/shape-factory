import {
  onEvent,
  getElement,
  select,
  selectAll,
  print,
  sleep,
  randomNumber,
  filterArray,
  create,
} from "./utils.js";

import Shape from "./Shape.js";

const shapesContainer = select(".shapes");
const createBtn = select(".create");
const shapeSelector = select(".shape-selector");
const colorSelector = select(".color-selector");
const shapeInfoSection = select(".shape-info");

const shapesArray = [];

let numberOfShapes = 0;

function createShape() {
  if (numberOfShapes < 24) {
    // Create and append to the grid box
    let newDiv = create("div");
    // Getting the selected shape and color from the dropdowns
    const selectedShape = shapeSelector.value;
    const selectedColor = colorSelector.value;

    // Setting the selected shape and color to the new div
    newDiv.classList.add(selectedShape);
    newDiv.style.backgroundColor = `#${selectedColor}`;

    // Increase the numnber of shapes
    numberOfShapes++;

    // Appending the new div to the grid container
    shapesContainer.appendChild(newDiv);

    // Using the Shape class to create a new Shape object
    const shape = new Shape(selectedShape, selectedColor);

    // Storing the new shape inside an array
    shapesArray.push(shape);

    onEvent("click", newDiv, () => {
      shape.getInfo();
    });
  } else {
    shapeInfoSection.innerHTML = "<p>Storage Full</p>";
  }
}

onEvent("click", createBtn, () => {
  createShape();
  // Create a Shape object
  // Save the new object in an array
  // Add a new shape (div) to the grid
});
