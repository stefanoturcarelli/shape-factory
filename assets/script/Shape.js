class Shape {
  _shape;
  _color;

  constructor(shape = "circle", color = "blue") {
    this.shape = shape;
    this.color = color;
  }

  set shape(shape) {
    this._shape = shape;
  }

  set color(color) {
    this._color = color;
  }

  get shape() {
    return this._shape;
  }

  get color() {
    return this._color;
  }

  getInfo() {
    // Getting and storing the section shape-info
    const shapeInfoSection = document.querySelector(".shape-info");

    // Creating a paragraph
    const paragraph = document.createElement("p");

    // Filling the paragraph with content
    paragraph.textContent = `${this.shape} ${this.color}`;

    // Clearing the section shape-info
    shapeInfoSection.innerHTML = "";

    // Appending the paragraph to the section shape-info
    shapeInfoSection.appendChild(paragraph);
  }
}

export default Shape;
