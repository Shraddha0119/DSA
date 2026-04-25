//   find the highest number
  
//   const arr = [40,80,60,30]
 
//  function Findhighest(arr){
//      let highest = arr[0];
     
//      for(let i = 1; i< arr.length; i++){
//          if(highest<arr[i])
//          highest = arr[i]
//      }
//      return highest
//  }
//  console.log(Findhighest(arr))



// secondhighest number

  const arr = [80,90,70,50,99,144]
 
 function Secondhighest(arr){
     let highest = arr[0];
     let secondhighest
     
     for(let i = 1; i < arr.length; i++){
         if(highest<arr[i]){
         secondhighest = highest
         highest = arr[i]

        }else if(arr[i]>secondhighest && arr[i]==highest){
            secondhighest = arr[i]
        }
     }
     return secondhighest
 }
 console.log(Secondhighest(arr));