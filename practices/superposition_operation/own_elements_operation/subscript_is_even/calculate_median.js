'use strict';
function isEven(num){
  if(num%2==0){
    return num;
  }
  return false;
}

function getEvenArray(collection){

  let result=[];
  collection.map(function(item){
    let judge_item = isEven(item);
    if(judge_item){
      result.push(judge_item);
    }
  })
  return result;
}

function getMedianNumber(collection){
  let len = collection.length;
  let evenNum = isEven(len);
  if(evenNum){
    return (collection[len/2]+collection[(len/2-1)])/2
  }else{
    return collection[(len-1)/2]
  }
}


var calculate_median = function(collection){
  let even_array = getEvenArray(collection);
  return getMedianNumber(even_array);

};
module.exports = calculate_median;
