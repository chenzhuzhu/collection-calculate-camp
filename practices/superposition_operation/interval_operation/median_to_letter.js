'use strict';

let letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function getAllLetters(collection){
  let result=[];
  collection.map(function(item){
    result.push(item);
  })
  for(let pre_item of collection){
    for(let later_item of collection){
      result.push(pre_item+later_item)
    }
  }
  return result;
}


function median_to_letter(collection) {
  let all_letters=getAllLetters(letters);
  let median_number = collection[Math.ceil(collection.length/2)];
  return all_letters[median_number-1]
}

module.exports = median_to_letter;
