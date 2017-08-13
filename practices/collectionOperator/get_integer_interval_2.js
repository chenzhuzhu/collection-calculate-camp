'use strict';
//根据给出的两个数字得到自增的偶数区间 a<b
function up_array(a,b){
    let new_arr = [];
    for(let i=a;i<=b;i=i+1){
        if(i%2 === 0){
            new_arr.push(i);
        }
    }
    console.log(new_arr);
    return new_arr;
}

//根据给出的两个数字得到自减的偶数区间 a>b
function down_array(a,b){
    let new_arr = up_array(b,a);
    return new_arr.reverse();

}

function get_integer_interval_2(number_a, number_b) {
  let result=[];
  if(number_a<number_b){
      result=up_array(number_a,number_b);
  }else if(number_a>number_b){
      result=down_array(number_a,number_b);
  }else{
    if(number_a%2===0){
      result=up_array(number_a,number_b)
    }

  }
  return result;
}

module.exports = get_integer_interval_2;
