'use strict';
//根据给出的两个数字得到自增的偶数区间 a<b
function up_array(a,b){
    var new_arr = [];
    for(var i=a;i<b;i=i+1){cd
        if(i%2 == 0){
            new_arr.push(i);
        }      
    }
    console.log(new_arr);
    return new_arr;
}

//根据给出的两个数字得到自减的偶数区间 a>b
function down_array(a,b){
    var new_arr2 = up_array(b,a);
    console.log(new_arr2.reverse());
    return new_arr2.reverse();
    
}

function equal_number(a,b){
    var new_arr=[];
    if(a%2==0){
        new_arr.push(a);
    }
    return new_arr;
}

function get_integer_interval(number_a, number_b) {
    console.log(number_a)
    console.log(number_b)
    if(number_a<number_b){
        console.log('a<b')
        up_array(number_a,number_b);
    }else if(number_a>number_b){
        down_array(number_a,number_b);
    }else{
        equal_number(number_a,number_b);
    }
}

module.exports = get_integer_interval;

