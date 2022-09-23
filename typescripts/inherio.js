"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    constructor(area) {
        this.Area = area;
    }
}
class Circle extends Shape {
    display() {
        console.log("Area of the circle: " + this.Area);
    }
}
var obj = new Circle(20);
obj.display();
