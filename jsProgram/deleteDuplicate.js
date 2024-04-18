var  s = "Abcabc and"
var s1 = " "
   var c = s.split (" ")
   var n = s.length
for(var i = 0;i<s.length;i++)
{

    
    var count = 1;
    for (var j=i+1;j<s.length;j++)
    {
        if (c[i]==c[j])
        {
            count++
            c[j]=c[n-1]
            n--
            j--
        }
    }
     if(count ==1)
     {
       s1 = s1 + (c[i])
     }
 
}
console.log(s1)