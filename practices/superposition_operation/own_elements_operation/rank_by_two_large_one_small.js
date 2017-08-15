'use strict';
function compare(value1,value2){
  if(value1<value2){
    return -1
  }else if(value1>value2){
    return 1
  }else{
    return 0
  }
}
function toRank(collection){
  let result=[];
  for(let i=0;i<collection.length-(collection.length%3);i=i+3){
    result.push(collection[i+1])
    result.push(collection[i+2])
    result.push(collection[i])
  }
  if(collection.length%3>0){
    for(let i=collection.length%3;i>0;i--){
      result.push(collection[(collection.length-i)])
    }
  }

  return result;
}
function rank_by_two_large_one_small(collection){
  collection.sort(compare);
  return toRank(collection);

}
module.exports = rank_by_two_large_one_small;
