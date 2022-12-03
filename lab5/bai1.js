// Trong method, this tham chiếu đến đối tượng là chủ của method.

// var student = {
//   id: 1,
//   firstName: "Peter",
//   lastName: "Parker",
//   age: 18,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(student.fullName());

// Trong function, this tham chiếu đến đối tượng toàn cục (Global).

// function testFunc() {
//   console.log(this); // object Window
// }

// testFunc();

// Trong function ở strict mode, this không được định nghĩa (undefined)

// "use strict";

// function testFunc() {
//   console.log(this); // undefined
// }

// testFunc();

// Sử dụng một mình, this tham chiếu đến đối tượng toàn cục (Global).

// var x = this;
// console.log(x); // object Window

// Trong DOM Event handlers, this tham chiếu đến phần tử Html nhận sự kiện.
