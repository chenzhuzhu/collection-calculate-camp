'use strict';
function isEven(num){
  if(num%2==0){
    return true
  }
  return false
}

function getEvenArray(collection){
  let result=[];
  for(let i=0;i<collection.length;i++){
    if(isEven(i+1)){
      result.push(collection[i]);
    }
  }
  return result;
}

function getAverage(collection){
  let sum = 0;
  collection.map(function(item){
    sum+=item
  })
  return sum/collection.length;
}
var calculate_average = function(collection){
  let evenArray = getEvenArray(collection);
  return getAverage(evenArray);


};
module.exports = calculate_average;
