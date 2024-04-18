var a = [1,3,4,6,7,8,9]
var sum = 0;
let count = 0;
 for(var i = 0;i<a.length;i++)
 {  
    if(a[i]%2!=0)
    { 
       // console.log( "values are : "+a[i])
       sum= sum+a[i];
       count++;
      
    }
   
 }
 console.log("sum of all odd numbers : "+sum);
 console.log("total odd numbers are : "+count);