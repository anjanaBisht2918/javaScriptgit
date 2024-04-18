var s = "Anjana"
var v = 0;
var c1 = 0;
for (var i =0;i<s.length;i++)
{             var v1 = s.toLowerCase()
        var c = v1.charAt(i)
        if (c=="a"|c=="e"|c=="i"|c=="o"|c=="u"|c=="A"|c=="E"|c=="I"|c=="O"|c=="U" )
        {
            v++;
        }
        else
        {
            c1++
        }

    }
    console.log(v)
    console.log(c1)