'use strict';

function toElement(array,result){
  array.map(function(item){
    result.push(item)
  })
  return result
}

function toOneDimension(collection,result){
  for(let item of collection){
    if(Array.isArray(item)){
      result = toElement(item,result)
    }else{
      result.push(item);
    }
  }
  return result;

}

function include(result,temp_result){
  for(let temp_item of temp_result){
    if (!result.includes(temp_item)){
      result.push(temp_item);
    }
  }
  return result;
}
function double_to_one(collection) {

  let temp_result=[];
  let result=[];
  temp_result=toOneDimension(collection,temp_result);
  result =include(result,temp_result);
  return result;

}

module.exports = double_to_one;
