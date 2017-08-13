'use strict';
function toCaculate(num){
  return num*4+1
}
var map_to_four_multiples_add_one = function(collection){
  let result=[];
  collection.map(function(item){
    result.push(toCaculate(item))
  })
  return result
};

module.exports = map_to_four_multiples_add_one;
