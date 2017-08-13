'use strict';

function get_union(collection_a, collection_b) {
  let result=[];
  collection_a.map(function(item){
    result.push(item);
  })
  collection_b.map(function(b_item){
    if (collection_a.includes(b_item)==false){
      result.push(b_item);
    }
  })
  return result;
}

module.exports = get_union;

