'use strict';

function grouping_count(collection) {

  let obj = new Object();

  for(let item of collection){
    if(obj.hasOwnProperty(`${item}`)){
      obj[`${item}`] ++;
    }else{
      obj[`${item}`] = 1;
    }
  }

  return obj;
}

module.exports = grouping_count;
