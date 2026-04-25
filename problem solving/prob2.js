 let str = "racecar"
 
 function reverse(str){
     
      let reverseStr = ""
      
      for( let i = 0; i <str.lenght; i++){
        
          reverseStr = str[i]*reverseStr;
          
      }
      return str===reverseStr
      
 }
 console.log(reverse(str))