// 5. Find duplicate element. Input: [1,3,4,2,2] → 2


function findDuplicate(arr) {
    const seen = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            return num;
        }
        seen.add(num);
    }
}

// Example
console.log(findDuplicate([1, 3, 4, 2, 2])); // 2

