'use strict';
function isEven(num){
  if(num%2==0){
    return true;
  }
  return false;
}

function divideArray(collection){
  let result=[];
  let oddArray=[];
  let evenArray=[];
  for(let item of collection){
    if(isEven(item)){
      evenArray.push(item);
    }else{
      oddArray.push(item);
    }
  }
  result.push(evenArray);
  result.push(oddArray);
  return result;
}
function compareEven(value1,value2){
  if (value1<value2){
    return -1
  }else if(value1>value2){
    return 1
  }else{
    return 0
  }
}
function compareOdd(value1,value2){
  if(value1>value2){
    return -1
  }else if(value1<value2){
    return 1
  }else{
    return 0
  }
}

function sortArray(collection){
  let result=[];
  collection[0].sort(compareEven);
  collection[1].sort(compareOdd);
  for (let each_collection of collection){
    for(let item of each_collection){
      result.push(item)
    }
  }
  return result;

}


var even_asc_odd_desc = function(collection){
  let divided = divideArray(collection)
  return sortArray(divided)




};
module.exports = even_asc_odd_desc;
