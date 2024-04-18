//these are used to store object refrence in this kw

let patient1={
  name : "geeta",
  age : "25",
  desease : "fever",
  date : "28.03.2024"
}

let patient2 ={

    name : "geeta",
    age : "25",
    desease : "fever",
    date : "30.03.2024"
}
function patientDetails(a,b) {
    console.log(`the patient details are : ${this.name} ${this.age}  ${this.desease} ${this.date} ${a+b}`)
    
}


//arrow Function
// let patientDetails =(a,b)=>{

//     console.log(`the patient details are : ${this.name} ${this.age}  ${this.desease} ${this.date} ${a+b}`)

// }



 //call
 patientDetails.call(patient1,8,9)
 //apply
patientDetails.apply(patient1,[2,4])
//bind
  let a =  patientDetails.bind(patient1,10,10)
  console.log(a)
  a()
 