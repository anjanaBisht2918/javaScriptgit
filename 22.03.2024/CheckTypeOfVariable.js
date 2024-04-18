const c = 30;
console.log(c);
console.log(typeof(c))


var a ="mohan";
console.log(a)
console.log(typeof(a))

var a = [12,15,"mohan","sohan",12.5]
 for(var i = 0 ;i<a.length;i++)
 
 
{
   //if(a[i]==typeof(string))
  if( typeof a[i]=== 'string')
    //if(a[i]=="mohan")
    console.log(a[i]);

}   
 

let b = [2,2,4,4,6, "mohan","sohan"]
for(const index in b)
{    if (typeof b[index] ==Number)
    console.log(b[index]);
}

