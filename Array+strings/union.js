// 7. Find union of two arrays. Input: [1,2], [2,3] → [1,2,3]

function union(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

// Example
const arr1 = [1, 2];
const arr2 = [2, 3];

console.log(union(arr1, arr2)); // [1, 2, 3]

