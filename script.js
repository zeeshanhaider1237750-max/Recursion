let fibs = (n) => {
  let array = [];
  array.push(0);
  array.push(1);
  for (let i = 2; i <= n; i++) {
    array[i] = array[i - 1] + array[i - 2];
    return array;
  }
};
let fibsRec = (n) => {
  let array = [];
  if (n === 0) {
    array.push(n);
    return array;
  }
  if (n === 1) {
    array.push(0);
    array.push(n);
    return array;
  }
  let prev = fibsRec(n - 1);
  let previous = prev[prev.length - 1] + prev[prev.length - 2];
  prev.push(previous);
  return prev;
};
