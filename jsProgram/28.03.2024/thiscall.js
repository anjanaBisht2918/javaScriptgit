//"use strict";       
 let x = 10;
 console.log(x)
 y = 30;
//console.log(y)
console.log(typeof(y));
console.log(this);           //{} window object===undefined

function a() {
    console.log(this)
}                             //{} window object===undefined
a()

let arr = () => {
    console.log(this)         //{} window object===undefined
}


arr()

let obj = {
    pname: "aaa",
    greet: function e(params) {
        console.log(this)
        // console.log(this.name)
    },
    b: () => {
        console.log(this)
        // console.log(this.pname)
    }
}
obj.greet()
obj.b()

