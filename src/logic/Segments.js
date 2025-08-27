import Point from "./Point";

export default class Segments{
  constructor(p1, p2) {
    this.p1 = new Point(p1.x, p1.y);
    this.p2 = new Point(p2.x, p2.y);
  }

  dx() { return this.p2.x - this.p1.x; }
  dy() { return this.p2.y - this.p1.y; }
  length() { return Math.hypot(this.dx(), this.dy()); }

  pointOnRelative(coeff) {
    return new Point(this.p1.x + coeff * this.dx(), this.p1.y + coeff * this.dy());
  }
}
