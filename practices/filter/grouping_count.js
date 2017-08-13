'use strict';
function find(collection,element){
  for(let each of collection){
    if (each['name']==element){
      return each
    }
  }
}

function grouping_count(collection) {
  let temp_arr=[];
  let temp_obj=new Object();
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
    let name_key =temp_item['name'];
    let count_value = temp_item['count'];
    temp_obj.name=temp_item['count'];
  }
  console.log(temp_obj)
  result.append(temp_obj);
  return result;
}

module.exports = grouping_count;
