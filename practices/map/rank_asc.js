'use strict';
function compare(value1,value2){
  if(value1<value2){
    return 1;
  }else if(value1>value2){
    return -1;
  }else{
    return 0
  }
}

var rank_asc = function(collection){
  collection.sort(compare);
  return collection
};

module.exports = rank_asc;
