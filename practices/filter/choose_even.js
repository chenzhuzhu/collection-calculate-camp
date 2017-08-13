'use strict';

function choose_even(collection) {
  let result =[];
  collection.map(function(item){
    if(item%2===0){
      result.push(item);
    }
  })
  return result;

}

module.exports = choose_even;
