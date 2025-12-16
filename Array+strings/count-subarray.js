// 9. Count subarrays with sum < K. Input: [1,2,3], 5 → 4


function countSubarraysLessThanK(arr, K) {
    let left = 0;
    let sum = 0;
    let count = 0;

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum >= K) {
            sum -= arr[left];
            left++;
        }

        count += right - left + 1;
    }

    return count;
}

// Example
const arr = [1, 2, 3];
const K = 5;

console.log(countSubarraysLessThanK(arr, K)); // 4
