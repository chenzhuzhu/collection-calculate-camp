'use strict';

function toElement(array,result){
  array.map(function(item){
    result.push(item)
  })
  return result

}

function double_to_one(collection) {
  let result=[];
  for(let item of collection){
    if(Array.isArray(item)){
      result = toElement(item,result)
    }else{
      result.push(item);
    }
  }
  console.log(result)
  return result;
}

module.exports = double_to_one;
