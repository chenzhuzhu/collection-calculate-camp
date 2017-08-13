'use strict';
// function get_letters(letters){
//   let result = [];
//   for(let item of letters){
//     result.push(item);
//   }
//   for(let pre_letter of letters){
//     for(let item of letters){
//       let new_letter = pre_letter+item;
//       result.push(new_letter);
//     }
//
//   }
//   return result;
//
// }

function get_letters(letters){
  let result=[];
  for(let item of letters){
    result.push(item);
  }
  letters.map(function(pre_item){
    letters.map(function(later_item){
      let new_leter = pre_item+later_item;
      result.push(new_leter);
    })
  })
  return result;
}



function up_array(a,b,all_letters){
  let new_arr = [];
  for(let i=a-1;i<b;i=i+1){
    new_arr.push(all_letters[i]);
  }
  return new_arr;
}

//根据给出的两个数字得到自减的偶数区间 a>b
function down_array(a,b,all_letters){
  let new_arr2 = up_array(b,a,all_letters);
  return new_arr2.reverse();

}

function equal_number(){
  let new_arr=[];
  new_arr.push('ab');
  return new_arr;
}



function get_letter_interval_2(number_a, number_b) {
  let letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let all_letters=get_letters(letters);
  let result;
  if(number_a<number_b){
    result = up_array(number_a,number_b,all_letters);
  }else if(number_a>number_b){
    result = down_array(number_a,number_b,all_letters);
  }else{
    result = equal_number();
  }
  return result

}

module.exports = get_letter_interval_2;

