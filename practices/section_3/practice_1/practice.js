'use strict';

function find(collection,element){
  for(let item of collection){
    if(item==element['key']){
      return element
    }
  }
}

function create_updated_collection(collection_a, object_b) {
  let result=[];
  for(let item of collection_a){
    let finded = find(object_b['value'],item);
    if(finded){
      finded.count--;
      result.push(finded);
    }else{
      result.push(item)
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
