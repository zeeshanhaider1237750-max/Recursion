let sort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let list1, list2;
  let middle = Math.floor(array.length / 2);
  list1 = array.slice(0, middle);
  list2 = array.slice(middle);

  let sortedLeft = sort(list1);
  let sortedRight = sort(list2);

  return merge(sortedLeft, sortedRight)
};
let merge = (left, right) => {
  let result = []
  let i = 0;
  let j = 0;
  while(i<left.length && j < right.length){
    if(left[i] < right[j]){
      result.push(left[i]);
      i++;
    }
    else{
      result.push(right[j]);
      j++;
    }
  }
  while(i < left.length){
    result.push(left[i]);
    i++;
  }
  while(j < right.length){
    result.push(right[j]);
    j++;
  }
  return result;
}