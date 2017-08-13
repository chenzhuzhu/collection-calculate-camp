'use strict';
let letters=['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number_map_to_word = function(collection){
  let result=[];
  collection.map(function(item){
    result.push(letters[item-1])
  })
  return result;
};

module.exports = number_map_to_word;
