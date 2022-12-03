// shape.prototype.move = function (x, y) {
//   this.x = x;
//   this.y = y;
// };

class shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
}

var st = new shape(1, 2);
st.move(3, 4);
console.log(st.y);
