'use strict';
function split(element){
  let splited = element.split('-');
  return {key:splited[0],count:parseInt(splited[1],10)};

}
function push(result,key,value){
  for(let i=0;i<value;i++){
    result.push(key)
  }
  return result;
}

function expand(collection){
  let result=[];
  for(let item of collection){
    if(item.length==1){
      result.push(item);
    }else{
      let {key,count} = split(item);
      push(result,key,count)
    }
  }
  return result;
}

function find(collection,element){
  for(let item of collection){
    if(element == item['key']){
      return item;
    }
  }
  return false;
}

function summarize(collection){
  let result=[];
  for(let item of collection){
    let finded =find(result,item);
    if (finded){
      finded.count++;
    }else{
      result.push({key:item,count:1})
    }
  }
  return result;
}

function count_same_elements(collection) {
  let expanded = expand(collection)
  return summarize(expanded);
}

module.exports = count_same_elements;
