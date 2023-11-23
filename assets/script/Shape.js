let shapeCount = 0;

class Shape {
  _shape;
  _color;
  _id;

  constructor(shape, color, id) {
    this.shape = shape;
    this.color = color;
    this.id = ++shapeCount;
  }

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

  getInfo() {
    // Getting and storing the section shape-info
    const shapeInfoSection = document.querySelector(".shape-info");

    // Creating a paragraph
    const paragraph = document.createElement("p");

    // Filling the paragraph with content
    paragraph.textContent = `Shape ${this.id}: ${this.shape} ${this.color}`;

    // Clearing the section shape-info
    shapeInfoSection.innerHTML = "";

    // Appending the paragraph to the section shape-info
    shapeInfoSection.appendChild(paragraph);
  }
}

export default Shape;
