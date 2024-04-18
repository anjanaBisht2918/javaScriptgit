var a = [ 7,9]
 var count =0;
for(var i=0;i<a.length;i++)
{ 

    if (a[i]%i==0)
    {
          count ++;
          break;
    }
}
if (count==2)
{
    
    console.log("prime number ")

}
else{
    console.log("not prime")
}