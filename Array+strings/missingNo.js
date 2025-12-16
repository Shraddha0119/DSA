// 4. Find missing number from 1 to N. Input: [1,2,4,5], 5 → 3

function findMissingNumber(arr, N) {
    const expectedSum = (N * (N + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Example
const arr = [1, 2, 4, 5];
const N = 5;

console.log(findMissingNumber(arr, N)); // 3
