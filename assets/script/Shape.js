class Shape {
  _shape;
  _color;

  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  get shape() {
    return this._shape;
  }

  get color() {
    return this._color;
  }

  getInfo() {
    return `${this.shape} ${this.color}`;
  }
}

export default Shape;
