function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (let number of array) {
    const complement = target - number;

    if (seenNumbers.has(complement)) {
      return true;
    }

    seenNumbers.add(number);
  }

  return false;
}

/* 
1. Create an empty set to store numbers we've seen so far.
2. Loop through the array:
   - For the current number, calculate the "complement" needed to reach the target.
   - If the complement is in the set, return true.
   - Otherwise, add the current number to the set.
3. If the loop finishes without finding a pair, return false.
*/

/*
This function uses a set to store numbers that have been seen so far. 
For every number in the array, it calculates the complement needed to 
reach the target. If the complement is found in the set, the function 
returns true. Otherwise, it adds the current number to the set. 
This approach avoids nested loops and reduces the time complexity to O(n).
*/

// Test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5], 10));
}

module.exports = hasTargetSum;
