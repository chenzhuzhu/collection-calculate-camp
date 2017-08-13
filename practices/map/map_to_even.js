'use strict';
function map_to_even(collection){
  let result=[];
  collection.map(function(item){
    result.push(item*2);
  })
  return result;
}
module.exports = map_to_even;
