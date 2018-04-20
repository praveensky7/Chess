function iqTest(numbers){

  var num = numbers.split(" ")
  console.log(num)
  
  var oddArray = [];
  var evenArray = [];
  var arrayType = [];
  
  for (var i = 0; i <= num.length-1; i++) {
  
  if(num[i]%2 == 0) {
  evenArray.push(num[i])
  }
  else {
  oddArray.push(num[i])
  }
  }
  if (oddArray.length < evenArray.length) {
     arrayType = oddArray;
  }
  else if (evenArray.length < oddArray.length) {
     arrayType = evenArray;
  }
  else {
     arrayType = undefined
  }
  
  console.log("oddArray Size is : ", oddArray.length)
  console.log("evenArray Size is : ", evenArray.length)
  console.log("arrayType value initialized is : ",arrayType + "-->",arrayType.length)   
  console.log(arrayType.length)
//   if (arrayType == 0) {
  for (var j = 0; j <= arrayType.length-1; j++) {
  
      for( var x = 0; x <= num.length-1; x++) {
      
          if (oddArray[j] == num[x]) {
          console.log(x)
              console.log("index of the respective number",x + 1)
          }

  }
  }

