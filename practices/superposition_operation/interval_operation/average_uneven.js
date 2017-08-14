'use strict';
function isOdd(num){
  if(num%2!=0){
    return num
  }else{
    return false;
  }
}

function getOddArray(collection){
  let result=[];
  for(let item of collection){
    let odd_number= isOdd(item)
    if(odd_number){
      result.push(odd_number)
    }
  }
  return result
}

function getAverage(collection){
  let sum=0;
  collection.map(function(item){
    sum+=item;
  })
  return (sum/collection.length);


}
function average_uneven(collection) {
  let get_all_odd_number = getOddArray(collection);
  return getAverage(get_all_odd_number);

}

module.exports = average_uneven;
