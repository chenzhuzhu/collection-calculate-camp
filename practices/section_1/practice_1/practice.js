'use strict';
function include(collection,element){
  for(let item of collection){
    if(element == item){
      return element
    }
  }
}

function collect_same_elements(collection_a, collection_b) {
  let result=[];
  for(let item of collection_a){
    let item_included = include(collection_b,item)
    if(item_included){
      result.push(item_included)
    }
  }
  return result;
}

module.exports = collect_same_elements;
