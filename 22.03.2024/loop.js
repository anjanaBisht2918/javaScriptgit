var arr = [10,20,"red","blue",20,30]

for(var i=0;i<arr.length;i++)
{
    if (arr[i]==10 || arr[i]=="red")
    {
      console.log(arr[i])
    process.stdout.write(arr[i])
    }
}

// console.log("<----------While loop------------->")
let a = [12,13,14,15]
let b= 0;
while (b<13)
{
    console.log(a[b])
    b++

    break
}


console.log("<--Print String value in single line----->")
var arr = ["black","blue", "white","red"]

for(var i=0;i<arr.length;i++)
{
    if (  arr[i]=="red" || arr[i]=="black")
    {
   // console.log(arr[i])
    process.stdout.write(arr[i] + " ")
    }
}