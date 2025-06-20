var a = [221, 311, 711, 2, 9, 6];

var b = [221, 311, 2, 9, 6];

function findMax(a) {
  max = a[0];
  for (let i = 1; i < a.length; i++) {
    if (max < a[i]) {
      max = a[i];
    }
  }
  console.log("dang tim max");
  return max;
}
console.log(findMax(b));

function findMin(a) {
  min = a[0];
  for (let i = 1; i < a.length; i++) {
    if (min > a[i]) {
      min = a[i];
    }
  }
  console.log("Min bang:");
  return min;
}
console.log(findMin(a));

function findMax2(max1, max2) {
  max1 = a[0];
  max2 = a[0];
  for (let i = 1; i < a.length; i++) {
    if (max1 < a[i]) {
      max2 = max1;
      max1 = a[i];
    } else {
      max1 = max1;
    }
    if ((max2 < a[i]) & (max1 > a[i])) {
      max2 = a[i];
    }
  }
  console.log("max2 bang:");
  return max2;
}
console.log(findMax2());

// max2 = a[0];

// for (let i = 0; i < 6; i++){
//     // console.log("Phần tử thứ:", i+1, a[i]);
//     if(a[i+1] == max || a[i] == max){
//         continue;
//     }
//     if(max2 < a[i + 1]){
//         max2 = a[i +1];
//     }
// }
// console.log(max2)
