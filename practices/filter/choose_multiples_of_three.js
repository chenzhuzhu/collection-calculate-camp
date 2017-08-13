'use strict';

function choose_multiples_of_three(collection) {
  let result =[];
  collection.map(function(item){
    if(item%3===0){
      result.push(item);
    }
  })
  return result;
}

module.exports = choose_multiples_of_three;
