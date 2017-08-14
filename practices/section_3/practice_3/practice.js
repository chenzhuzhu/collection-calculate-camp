'use strict'

function find(collection,element){
  for(let item of collection){
    if (item['key']==element){
      return item
    }
  }
  return false;
}

function summary(collection){
  let result =[];
  for(let item of collection){
    let finded = find (result,item)
    if(finded){
      finded.count++
    }else{
      result.push({key:item,count:1});
    }
  }
  return result;
}

function findObject(object,element){
  for(let item of object){
    if (item == element['key']){
      return element
    }
  }
  return false
}

function compare(collection,object){
  let result =[];
  for (let item of collection){
    let finded= findObject(object,item)
    if(finded){
      finded.count= finded.count-Math.floor(finded.count/3)
      result.push(finded);
    }else{
      result.push(item)
    }
  }
  return result;
}
function create_updated_collection(collection_a, object_b) {
  let summarized = summary(collection_a)
  return compare(summarized,object_b['value'])
}

module.exports = create_updated_collection;
