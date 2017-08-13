'use strict';
const asc =require('./rank_asc')
var rank_desc = function(collection){
  let result;
  result =asc(collection).reverse();
  return result;
};

module.exports = rank_desc;
