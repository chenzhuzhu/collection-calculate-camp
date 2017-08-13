'use strict';

let desc = require('../map/rank_desc.js');


function isEven(array){
  if(array.length%2==0){
    return (array[array.length/2]+array[array.length/2-1])/2;
  }else{
    return array[array.length/2];
  }
}
function compute_chain_median(collection) {
  let transfer_collection = collection.split('->');
  let int_arr =[];
  transfer_collection.map(function(item){
    item=parseInt(item,10)
    int_arr.push(item);
  })
  let desc_arr =desc(int_arr);
  return isEven(desc_arr);
}

module.exports = compute_chain_median;
