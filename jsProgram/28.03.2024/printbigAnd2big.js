//print biggest and 2nd biggest element of an array

var a =[12,13,14,15,16]
let max1 =a[0]
let max2 = a[1]

for (var i = 0;i<a.length;i++)
{
    if (a[i]>max1)
    {    max2 = max1
         max1=a[i]
         
    }
    else if(a[i>max2&&a[i]]!=max1){

        max2=a[i]
    }
     
}
console.log("biggestnumber is :"+max1)
console.log("2nd biggest number is:"+max2)