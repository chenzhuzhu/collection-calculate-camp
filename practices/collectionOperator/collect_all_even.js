'use strict';

function is_odd(num){
    if(num%2 ==0){
        return true;
    }else{
        return false;
    }
}

function collect_all_even(collection) {
    let arr = [];
    for(let item of collection){
        if(is_odd(item)){
            arr.push(item)
        }
    }
    return arr;
}

module.exports = collect_all_even;
