// 2. Find triplets whose sum equals target. Input: [1,2,3,4,5], 9 → Output: [2,3,4]

function findTriplets(arr, target) {
    arr.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if (sum === target) {
                result.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            } 
            else if (sum < target) {
                left++;
            } 
            else {
                right--;
            }
        }
    }

    return result;
}

// Example
const arr = [1, 2, 3, 4, 5];
const target = 9;

console.log(findTriplets(arr, target)); // [[2, 3, 4]]
