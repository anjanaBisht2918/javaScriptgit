//count frequency of each element
//count frequency of only even element
//count frequency of only odd element
// var a = [2, 12, 12, 2, 2, 3, 3,4, 5];
// var n = a.length;

// for (var i = 0; i < n; i++) {
//     var count = 1; // Initialize count for each element
//     for (var j = i + 1; j < n; j++) {
//         if (a[i] == a[j]) {
//             count++;
//             a[j] = a[n - 1]; //last index value 
//             n--; 
//             j--; // Adjust index to recheck the replaced element
//         }
//     }
//     console.log(a[i] + " is " + count + " times");
// }


//count frequecy of only even element

var a = [2, 12, 12, 2, 2, 3, 3,4, 5];
var n = a.length;

for (var i = 0; i < n; i++) {
    var count = 1; // Initialize count for each element
    for (var j = i + 1; j < n; j++) {
        if(a[i] )
        if (a[i] == a[j]) {
            count++;
            a[j] = a[n - 1]; //last index value 
            n--; 
            j--; // Adjust index to recheck the replaced element
        }
    }
    console.log(a[i] + " is " + count + " times");
}
