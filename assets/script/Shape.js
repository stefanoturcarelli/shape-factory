let shapeCount = 0;

class Shape {
  _shape;
  _color;
  _id;

  set shape(shape) {
    this._shape = shape;
  }

  set color(color) {
    this._color = color;
  }

  set id(id) {
    this._id = id;
  }

  get shape() {
    return this._shape;
  }

  get color() {
    return this._color;
  }

  get id() {
    return this._id;
  }

  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
    this.id = ++shapeCount;
  }

  getInfo() {
    // Getting and storing the section shape-info
    const shapeInfoSection = document.querySelector(".shape-info");

    // Creating a paragraph
    const paragraph = document.createElement("p");

    // Getting the selected color name from the color selector
    const colorSelector = document.querySelector(".color-selector");
    const selectedColorOption =
      colorSelector.options[colorSelector.selectedIndex];
    const colorName = selectedColorOption.textContent;

    // Filling the paragraph with content
    paragraph.textContent = `Shape ${this.id}: ${colorName} ${this.shape}`;

    // Clearing the section shape-info
    shapeInfoSection.innerHTML = "";

    // Appending the paragraph to the section shape-info
    shapeInfoSection.appendChild(paragraph);
  }
}

export default Shape;
