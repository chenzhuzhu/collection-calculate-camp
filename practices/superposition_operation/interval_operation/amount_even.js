'use strict';

function isEven(num){
  if(num%2==0){
    return num
  }else{
    return false;
  }
}

function amount_even(collection) {
  let sum=0;
  for(let item of collection){
    let even_number= isEven(item)
    if(even_number){
      sum+=even_number
    }
  }
  return sum;
}

module.exports = amount_even;
