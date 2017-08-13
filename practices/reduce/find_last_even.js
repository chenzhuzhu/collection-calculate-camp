'use strict';

function find_last_even(collection) {
  collection.reverse();
  for(let item of collection){
    if(item%2==0){
      return collection.length-1-collection.indexOf(item)
    }
  }
}

module.exports = find_last_even;
