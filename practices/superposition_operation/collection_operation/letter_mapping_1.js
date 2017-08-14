'use strict';
let letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function chooseEven(collection){
  let result =[];
  for(let item of collection){
    if (item%2==0){
      result.push(item)
    }
  }
  return result;
}

function transferLetter(collection,letters){
  let result=[];
  for(let item of collection){
    result.push(letters[item-1]);
  }
  return result;
}


function even_to_letter(collection) {
  let even_number = chooseEven(collection);
  let result = transferLetter(even_number,letters);
  return result;

}

module.exports = even_to_letter;
