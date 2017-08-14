'use strict';
function isOdd(num){
  if(num%2!=0){
    return num;
  }
  return false;
}

function hybrid_operation_to_uneven(collection) {
  let result =[];
  for(let item of collection){
    let Odd_number = isOdd(item);
    if(Odd_number){
      result.push(Odd_number*3+2)
    }
  }
  return result;
}

module.exports = hybrid_operation_to_uneven;

