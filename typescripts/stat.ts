 class Circle {
   static pi= 3.14;
    pi=3;
}


console.log(Circle.pi); //static

let pies = new Circle(); //non-static
console.log(pies.pi);
