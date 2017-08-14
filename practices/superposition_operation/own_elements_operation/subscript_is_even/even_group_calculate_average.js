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

var even_group_calculate_average = function(collection){
  let even_array = getEvenArray(collection);

};
module.exports = even_group_calculate_average;
