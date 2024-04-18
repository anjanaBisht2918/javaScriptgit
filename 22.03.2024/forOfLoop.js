//for--of loop

let a = [2,2,4,4,6]
for(const index of a)
{
    console.log(index );
    //if(a[index]==4)
    console.log(index)
}

//for each not return any value its a function of array

a.forEach(element => {
   // console.log(element);
   if(element==6)
    console.log(element*2)

 });

// var b;
// console.log(b); //here we will get undefined default value
// b=30
// console.log(b);  

