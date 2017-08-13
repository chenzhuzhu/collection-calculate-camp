'use strict';
let letters=['a','b','c','d','e','f','g','h','i','g','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function getAllLetter(letters){

  let result=[];
  letters.map(function(item){
    result.push(item);
  })
  letters.map(function(pre_item){
    letters.map(function(later_item){
      result.push(pre_item+later_item)
    })
  })

  return result;

}

var number_map_to_word_over_26 = function(collection){

  let all_letters = getAllLetter(letters);
  let result=[];
  collection.map(function(item){
    let equal_letter = all_letters[item-1];
    result.push(equal_letter);

  })
  return result;

};

module.exports = number_map_to_word_over_26;
