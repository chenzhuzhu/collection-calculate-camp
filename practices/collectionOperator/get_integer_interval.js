'use strict';
//根据给出的两个数字得到自增的偶数区间 a<b
function up_array(a,b){
    let new_arr = [];
    for(let i=a;i<=b;i=i+1){
      new_arr.push(i);
    }
    return new_arr;
}

//根据给出的两个数字得到自减的偶数区间 a>b
function down_array(a,b){
    let new_arr2 = up_array(b,a);
    return new_arr2.reverse();

}

function equal_number(a,b){
    let new_arr=[];
    new_arr.push(a);
    return new_arr;
}

function get_integer_interval(number_a, number_b) {

  let result=[];
  if(number_a<number_b){
      result = up_array(number_a,number_b);
  }else if(number_a>number_b){
      result = down_array(number_a,number_b);
  }else{
      result = equal_number(number_a,number_b);
  }
  return result
}

module.exports = get_integer_interval;

