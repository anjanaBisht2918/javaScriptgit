//arguments ==> in standard function

function details (name , phoneNo=12 ,age ,location='mysore')
{
   console.log("the person details are "+name+" "+phoneNo+" "+age+" "+location)
   console.log(arguments);
   //template literls
   console.log(`The person details are ${name} ${phoneNo} ${age}` );

}

//details('abc',121212,39)
//details('abc',121212,39 ,"delhi")  //we can over ride thec default value during invoking 

details('abc',undefined,30)



//arguments is arrow function ===>argument object is directly not available
// const details = (name,  phoneNo = 12, age, location = 'mysore'  ) => {
//   // console.log(`The person details are ${name} ${phoneNo} ${age} ${location}`);
//    console.log(arguments)
//  };
 
//  details('John', undefined,  30 );  
 