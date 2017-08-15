'use strict';
function isEven(num){
  if(num%2==0){
    return num;
  }
  return false;
}

function getEvenArray(collection){

  let result=[];
  collection.map(function(item){
    let judge_item = isEven(item);
    if(judge_item){
      result.push(judge_item);
    }
  })
  return result;
}

function getAverage(collection){
  let sum = 0;
  collection.map(function(item){
    sum+=item
  })
  return sum/collection.length
}
function divideEachGroup(collection){
  let oneNum=[];
  let twoNum=[];
  let threeNum=[];

  collection.map(function(item){
    if(item.toString().length==3){
      threeNum.push(item)
    }else if(item.toString().length==2){
      twoNum.push(item)
    }else{
      oneNum.push(item);
    }
  })
  // console.log(threeNum);
  // console.log(twoNum);
  // console.log(oneNum)
  let result=[];
  result.push(getAverage(oneNum));
  result.push(getAverage(twoNum));
  result.push(getAverage(threeNum));
  return result;

}

function analyseResult(collection){
  let result=[];
  collection.map(function(item){
    if (!isNaN(item)){
      result.push(item)
    }
  })
  if (result.length==0){
    result.push(0);
  }
  return result;
}

function evenLoctionNum(collection){
  let result=[];
  for(let i=0;i<collection.length;i++){
    if((i+1)%2==0){
      result.push(collection[i])
    }
  }
  return result;
}

function groupingArray(collection){
  let dividedGroup = divideEachGroup(collection);
  return analyseResult(dividedGroup)

}

var even_group_calculate_average = function(collection){
  let evenLocArray = evenLoctionNum(collection);
  let even_array = getEvenArray(evenLocArray);
  return groupingArray(even_array)

};
module.exports = even_group_calculate_average;
