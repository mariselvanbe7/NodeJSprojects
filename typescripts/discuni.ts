interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}


interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;


function area(s:Shape) {

    let size= 5;
    if(s.kind === "square"){
        console.log("area is" + size * size);
    }
    else if (s.kind === "rectangle") {
        return s.width * s.height;
    }
    else if (s.kind === "circle") {
        return Math.PI * (s.radius **2);
    }
    else {
    
        const _exhaustiveCheck: never = s;
    }
}


