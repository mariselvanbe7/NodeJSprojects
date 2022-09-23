"use strict";
class Circle {
    constructor() {
        this.pi = 3;
    }
}
Circle.pi = 3.14;
console.log(Circle.pi); //static
let pies = new Circle(); //non-static
console.log(pies.pi);
