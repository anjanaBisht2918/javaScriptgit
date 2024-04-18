//push()
// const fruit = []; //array creation
// console.log(fruit); //empty array
//  fruit.push("orange"); //adding element  last
//  fruits.push("Mango");
//  fruits.push("Apple");
//  console.log(fruit);   // [ 'Banana' ]


//lenght====>add element 
// let a = []
// console.log(a);

// a[a.length]="Mango";
// a[a.length]="Apple";
// console.log(a);

//forEach()
// fetch all the element from an array
 const arr  = [12,12,34,45,23]
     let sum = 0;
    arr.forEach((element ,i,array) => {
          // console.log(element);
         // console.log('a['+ i +'] ='+ element)
         sum=sum+element;
    });

   console.log(sum);

//occurance of element in array

 const a = ['a','b','a','b','c','d','e',2]
       console.log(typeof a);
       let count =[];
      a.forEach(element => {
         
           if(count[element])
           {
              count[element]++;
           }
           else{
              count[element]=1;
           }
         
      });
      console.log(count);
  
    
   //    const aar = ['a','b','a','b','c','d','e',2]
   //    let count1 ={}
   //    a.forEach(ele => count[ele] )
   //   console.log(arr);

