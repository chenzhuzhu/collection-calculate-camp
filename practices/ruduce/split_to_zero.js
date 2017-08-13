'use strict';
function spiltTilZero(number,interval){
  let result=[];
  for(let init = number;init>=0;init=init-interval){
    result.push(parseFloat(init.toFixed(1)));
  }
  return result;
}

function spiltDownZero(number,interval){
  let result=[];
  let frequency = Math.ceil(number/interval);
  let init=number;
  for(;frequency>=0;frequency--){
    result.push(parseFloat(init.toFixed(1)));
    init=init-interval;
  }
  return result;

}

function spilt_to_zero(number, interval) {
  if(number%interval==0){
    return spiltTilZero(number,interval);
  }else{
    return spiltDownZero(number,interval);


  }
}

module.exports = spilt_to_zero;
