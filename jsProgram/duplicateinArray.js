var a = [2, 12, 12, 2,2, 3, 4, 5];
var n = a.length;
var count = 0;

for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
        if (a[i] == a[j]) {
            if(j<i)
            
            count++;
            break; // Once a duplicate is found, no need to continue checking the rest of the array
        }
    }
}

console.log("Number of duplicate elements:", count);
