// function stringChop(str, size) {
//   // your code here
// }

// // Do not change the code below
// // const str = prompt("Enter String.");
// // const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));


function stringChop(str, size) {
  // Check for null or undefined input
  if (str == null) return [];

  // Convert size to a number in case it's passed as a string
  size = Number(size);

  // Validate that size is a positive integer
  if (isNaN(size) || size <= 0) return [];

  const result = [];

  // Loop through the string in increments of 'size'
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
