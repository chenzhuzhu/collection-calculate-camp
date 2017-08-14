'use strict';

let letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function averageCollection(collection){
  let sum = 0;
  for(let item of collection){
    sum+= item;
  }
  return Math.ceil(sum/(collection.length));
}

function getLetters(num,collection){
  return collection[num-1];
}

function average_to_letter(collection) {
  let average_num=averageCollection(collection);
  return getLetters(average_num,letters);
}

module.exports = average_to_letter;

