// 3. Move all negative numbers to beginning. Input: [3,-1,5,-2] → [-1,-2,3,5]

function moveNegatives(arr) {
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
    }

    return arr;
}

// Example
const arr = [3, -1, 5, -2];
console.log(moveNegatives(arr)); // [-1, -2, 3, 5]
