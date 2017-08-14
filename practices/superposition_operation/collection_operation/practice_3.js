'use strict';

function isOdd(num){
  if(num%2!=0){
    return num;
  }
  return false;
}

function hybrid_operation_to_uneven(collection) {
  let sum=0;
  for(let item of collection){
    let Odd_number = isOdd(item);
    if(Odd_number){
      sum+=Odd_number*3+5
    }
  }
  return sum;
}

module.exports = hybrid_operation_to_uneven;

