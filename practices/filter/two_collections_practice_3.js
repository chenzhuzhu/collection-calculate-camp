'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result =[];
  for(let item_a of collection_a){
    for (let item_b of collection_b){
      if(item_a%item_b==0){
        result.push(item_a)
      }
    }
  }
  return result
}

module.exports = choose_divisible_integer;
