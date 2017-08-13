'use strict';
function find(collection,element){
  for(let item of collection){
    if(item['key']==element){
      return item;
    }
  }
}

function count_same_elements(collection) {
  let result = [];

  for(let item of collection){
    let finded = find(result,item)
    if(finded){
      finded['count']++;
    }else{
      result.push({key:item,count:1})
    }

  }
  return result;

}

module.exports = count_same_elements;
