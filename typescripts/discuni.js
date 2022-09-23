"use strict";
function area(s) {
    let size = 5;
    if (s.kind === "square") {
        console.log("area is" + size * size);
    }
    else if (s.kind === "rectangle") {
        return s.width * s.height;
    }
    else if (s.kind === "circle") {
        return Math.PI * (s.radius ** 2);
    }
    else {
        const _exhaustiveCheck = s;
    }
}
