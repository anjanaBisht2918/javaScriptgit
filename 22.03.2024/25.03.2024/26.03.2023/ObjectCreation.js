 //object creation using standard way
let persondetails = {
    pname: "abc",
    age: 15,
    'phone no': 123212342,
    address: ['bangalore', 'noida'],
    details: function () {
        console.log("the details are :" + this.pname + " " + this.age);
    },
    spouce:
    {
        sname: "xyz",
        age: 20
    }

}

// //dot notation ==> access object details 
// console.log(persondetails.address[0])
// console.log(persondetails)
// console.log(persondetails.spouce.sname)
// //bracket notation
// console.log(persondetails["address"])
// console.log(persondetails["phone no "])
// console.log(persondetails["address"][1])
// console.log(persondetails["spouce"]["sname"])

// //delete some property
// delete persondetails.address
// console.log(persondetails);
// //modify 
// persondetails.age = 25
// console.log(persondetails["age"])

// //add new property
// persondetails.location ="delhi"
// console.log(persondetails)

Object.defineProperty(persondetails,'prop',{ 
    enumerable :true,        //by default true if we will give false then it will not print
    value : 12123232
})
console.log(persondetails)
  var a =JSON.stringify(persondetails)
        console.log(a);
//console.log(object.value(persondetails))

//constructer function //stand fn , fun exp//arrow fn not allowed

// function person( pname ,age ,cname,compName)
// {
//     this.pname =pname
//     this.age = age
//     this.cname =cname
//     this.compName =compName
// }
// let details = new person("abs",20 ,"tcs",function compName(){console.log("companyName is : "+" "+this.cname);})
//     // var a =details.pname
//     // console.log(a)
//     // console.log(details.age)
   
//     console.log(details)
//     details.compName()
   

    // let d2 = new person("xyz",20,)
    
    // console.log(d2)
    // console.log(details ,d2)

    //class
    // class person1
    // {
    //     constructor(pname , id)
    //     {
    //         this.pname = pname
    //         this.id = id
    //     }

    // }
    //  let d3 = new person1("mohan" ,102)
    //  console.log(d3)
    //  console.log(d2)
    //  console.log(details)
