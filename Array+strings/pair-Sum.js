// 1. Find all pairs whose sum equals target. Input: [2,7,11,15], 9 → Output: [2,7]



const arr = [2,7,11,15]
const target = 18;

const map= new Map();
for(let num of arr){
    const complement = target-num;

    if(map.has(complement))console.log(complement,num);
    map.set(num,true)
    
}