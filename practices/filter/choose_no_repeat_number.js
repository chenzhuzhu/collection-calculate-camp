'use strict';


function find(collection,element){
  for(let each of collection){
    if (each['name']==element){
      return each
    }
  }
}

function choose_no_repeat_number(collection) {

  let temp_arr=[];
  let result=[];
  for(let item of collection){
    let exist_item = find(temp_arr,item);
    if(exist_item){
      exist_item.count++;
    }else{
      temp_arr.push({name:item,count:1})
    }

  }
  for(let temp_item of temp_arr){
    result.push(temp_item['name'])
  }
  return result;

}

module.exports = choose_no_repeat_number;
