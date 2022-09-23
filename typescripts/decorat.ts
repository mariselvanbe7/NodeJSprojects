function logger(constructor: Function){
    console.log("jfhgdfjskg");
    console.log(constructor);
}


@logger
class Person {
   name ="mari";

        constructor(){
            console.log("I type decorator concept");
        }
}

const per = new Person();

console.log(per);