// 10. Longest consecutive sequence. Input: [100,4,200,1,3,2] → 4


function longestConsecutive(arr) {
    const set = new Set(arr);
    let longest = 0;

    for (let num of set) {
        // check start of sequence
        if (!set.has(num - 1)) {
            let currentNum = num;
            let length = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
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
