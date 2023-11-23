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

function createShape() {
  // Create and append to the grid box
}

onEvent("click", createBtn, () => {
  createShape();
  // Create a Shape object
  // Save the new object in an array
  // Add a new shape (div) to the grid
});
