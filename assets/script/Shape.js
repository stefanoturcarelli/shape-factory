class Shape {
  _shape;
  _color;

  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  set name(name) {
    this._name = name;
  }

  set color(color) {
    this._color = color;
  }

  get name() {
    return this._name;
  }

  get color() {
    return this._color;
  }

  getInfo() {
    return `${this.color} ${this.name}`;
  }
}

export default Shape;
