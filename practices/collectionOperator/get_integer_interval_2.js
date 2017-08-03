'use strict';
//根据给出的两个数字得到自增的偶数区间 a<b
function up_array(a,b){
    var new_arr = [];
    for(var i=a;a<=b;i=i+1){
        if(i%2 == 0){
            new_arr.push(i);
        }      
    }
    console.log(new_arr);
    return new_arr;
}

//根据给出的两个数字得到自减的偶数区间 a>b
function down_array(a,b){
    var new_arr = up_array(b,a);
    console.log(new_arr.reverse());
    return new_arr.reverse();
    
}

function get_integer_interval_2(number_a, number_b) {
    if(number_a<number_b){
        up_array(number_a,number_b);
    }else{
        down_array(number_a,number_b);
    }
}

module.exports = get_integer_interval_2;
