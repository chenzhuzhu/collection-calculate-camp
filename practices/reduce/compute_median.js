'use strict';

let desc = require('../map/rank_desc.js');

function isEven(array){
  if(array.length%2==0){
    return (array[array.length/2]+array[array.length/2-1])/2;
  }else{
    return array[array.length/2];
  }
}


function compute_median(collection) {

  let desc_arr =desc(collection);
  let arr_length = desc_arr.length;

  if (arr_length%2==0){
    return (desc_arr[arr_length/2]+desc_arr[arr_length/2-1])/2

  }else{
    return (desc_arr[(arr_length-1)/2])

  }
}

module.exports = compute_median;


