//inheritance ===using object

let car = {
name :"bmw",
Yop:2024 ,
model : "2024_bmw"   ,
owner :"xxx",
details: function()
{
    console.log(`car details are ${this.name} ${this.Yop} ${this.model} ${this.owner} ${this.details}`)
}

}

//object. create=========
//child object
//  let newCar = Object.create(car)
//  console.log(newCar);                    //{}  empty object
//  newCar.name= "Audi"                    //override
//  console.log(typeof newCar.Yop)        //number
//  console.log(typeof newCar.owner)      //string
// console.log(newCar.name);
//  console.log(newCar.Yop);
//  console.log(Object.getPrototypeOf(newCar))


 Array.prototype.sum=function()
 {
    console.log("new method");
 }
 let arr =[1,2,3,4,5]
 arr.sum();