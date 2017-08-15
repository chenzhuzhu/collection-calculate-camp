'use strict';
function evenLoctionNum(collection){
  let result=[];
  for(let i=0;i<collection.length;i++){
    if((i+1)%2==0){
      result.push(collection[i])
    }
  }
  return result;
}

function count(collection){
  let count_result=[];
  for(let item of collection){
    let finded=find(count_result,item)
    if (finded){
      finded.count++;
    }else{
      count_result.push({key:item,count:1})
    }
  }
  return count_result
}

function find(collection,element){
  for(let item of collection){
    if (item['key'] == element){
      return item
    }
  }
  return false
}

function timeEqualOne(collection){
  let result=[];
  for(let item of collection){
    if (item['count'] ==1 ){
      result.push(item['key'])
    }
  }
  return result
}
var single_element = function(collection){
  let evenLocArray = evenLoctionNum(collection);
  let counted=count(evenLocArray)
  return timeEqualOne(counted)

};
module.exports = single_element;
