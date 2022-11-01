
//Сортировка выбором
function selectionSort (arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if ( min != i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr
}

console.log (selectionSort([2,5,7,3,9,3,1,7,4]))




//Сортировка  слиянием
function sort(left, right) {
  const arrSort = [];
  let i = (j = 0);
  while (i < left.length && j < right.length) {
    arrSort.push((left[i] < right[j]) ? left[i++] : right[j++]);
  }
  return [...arrSort, ...left.slice(i), ...right.slice(j)];
}

function cut(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor (arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle, arr.length)

  return (sort(cut(leftArr), cut(rightArr)))
}

console.log(cut([3,7,9,3,1,6,8,4,0,3]))
