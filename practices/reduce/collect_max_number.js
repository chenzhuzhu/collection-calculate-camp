'use strict';

function collect_max_number(collection) {
  let max=0;
  for(let item of collection){
    if (item>max){
      max=item
    }
  }
  return max
}

module.exports = collect_max_number;
