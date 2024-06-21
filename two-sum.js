function twoSum(nums, target) {
  const inputCount = nums.length;
  const visitedStore = new Map();

  for (var i = 0; i < inputCount; i++) {
    const currentNumber = nums[i];

    // calculate for the remaining result by deduct the current number from target
    const remaining = target - currentNumber;

    // find whether the remaining result number found in store
    // if yes, return the pair of number
    if (visitedStore.has(remaining)) {
      return [visitedStore.get(remaining), i];
    }

    // store visited number with array position
    visitedStore.set(currentNumber, i);
  }

  return []
}



// Example usage:

const nums = [2, 7, 11, 15];

const target = 9;

const result = twoSum(nums, target);

console.log(result);  // Expected output should be [0, 1] because nums[0] + nums[1] == 9
