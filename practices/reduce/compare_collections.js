'use strict';

function compare_collections(collection_a, collection_b) {
  if(collection_a.length==collection_b.length){
    for(let i =0;i<collection_a.length;i++){
      if (collection_a[i]==collection_b[i]){
        return true;
      }
    }
  }
  return false;
}

module.exports = compare_collections;


