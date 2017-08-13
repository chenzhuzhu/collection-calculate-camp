'use strict';

function calculate_elements_sum(collection) {
  let result =0;
  collection.map(function(item){
    result+=item
  })
  return result;
}

module.exports = calculate_elements_sum;

