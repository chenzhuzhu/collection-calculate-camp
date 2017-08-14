'use strict';

function expand(collection){
  let result=[];
  for(let item of collection){
    if(item.length!=1){
      let splited =item.split('-')
      let key = splited[0]
      let value = splited[1]
      push(result,key,value)
    }else{
      result.push(item);
    }
  }
  return result;
}

function push(result,key,value){
  for(let i = 0;i<value;i++){
    result.push(key)
  }
  return result;
}

function find(collection,element){
  for(let item of collection){
    if (item['key']==element){
      return item
    }
  }
  return false
}

function summary(collection){
  let result=[];
  for(let item of collection){
    let finded =find(result,item)
    if(finded){
      finded.count++;
    }else{
      result.push({key:item,count:1});
    }
  }
  return result;
}

function filterCount(collection_a,collection_b){
  let result=[];
  for(let item of collection_b){
    let finded = findReduce(collection_a,item)
    if(finded){
      finded.count=finded.count-Math.floor(finded.count/3)
      result.push(finded)
    }else{
      result.push(item)
    }
  }
  return result;
}

function findReduce(collection,element){
  for(let item of collection){
    if(item==element['key']){
      return element
    }
  }
  return false
}


function create_updated_collection(collection_a, object_b) {
  let expanded = expand(collection_a);
  let summarized =summary(expanded);
  let result = filterCount(object_b['value'],summarized)
  return result
}

module.exports = create_updated_collection;
