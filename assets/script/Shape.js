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
}

export default Shape;
