'use strict';
function find(collection,element){
  for(let item of collection){
    if (element===item){
      return item
    }
  }

}


function get_intersection(collection_a, collection_b) {
  let result=[];
  for(let item of collection_b){
    let finded= find(collection_a,item);
    if(finded){
      result.push(finded);
    }
  }
  return result;
}

module.exports = get_intersection;
