// 6. Find intersection of two arrays. Input: [1,2,3], [2,4,3] → [2,3]

function intersection(arr1, arr2) {
    const set = new Set(arr1);
    const result = [];

    for (let num of arr2) {
        if (set.has(num)) {
            result.push(num);
            set.delete(num); // avoid duplicates
        }
    }

    return result;
}

// Example
const arr1 = [1, 2, 3];
const arr2 = [2, 4, 3];

console.log(intersection(arr1, arr2)); // [2, 3]
