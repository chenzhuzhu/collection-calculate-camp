function count_same_elements(collection) {
  let result=[];
  for(let item of collection) {
    if(item.length!=1){
      let key=item.split('-')[0]
      let count=item.split('-')[1]
      let {key,count};
      result.push({key,count})


    }
  }
}

module.exports = count_same_elements;
