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
    return `${this.color} ${this.shape}`;
  }
}

export default Shape;
