// 10. Longest consecutive sequence. Input: [100,4,200,1,3,2] → 4

function longestConsecutive(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        // check if num is the start of a sequence
        if (!set.has(num - 1)) {
            let current = num;
            let length = 1;

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
}

// Example
const arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(arr)); // 4
