// Define three names
const name1 = "aaaa";
const name2 = "bbbb";
const name3 = "cccc";



// Determine the longest length
var maxLength = 0;
if(name1.length>maxLength){maxLength = name1.length}
if(name2.length>maxLength){maxLength = name2.length}
if(name3.length>maxLength){maxLength = name3.length}


// Initialize an array to store names with the longest length
const longestNames = [];

// Find names with the longest length
if (name1.length === maxLength) {
  longestNames.push(name1);
}
if (name2.length === maxLength) {
  longestNames.push(name2);
}
if (name3.length === maxLength) {
  longestNames.push(name3);
}

// Output the result {
console.log(longestNames);