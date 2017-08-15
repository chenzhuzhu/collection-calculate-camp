'use strict';
function evenLoctionNum(collection){
  let result=[];
  for(let i=0;i<collection.length;i++){
    if(i%2==0){
      result.push(collection[i])
    }
  }
  return result;
}

function judgeResult(collection,element){
  for(let item of collection){
    if (item==element){
      return true
    }
  }
  return false
}

var is_exist_element = function(collection,element){
  let evenLocArray = evenLoctionNum(collection);
  return judgeResult(evenLocArray,element)

};
module.exports = is_exist_element;
