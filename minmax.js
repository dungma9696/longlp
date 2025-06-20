let M = [];
let n;
while (true) {
  n = Number(prompt("Nhập số lượng phần tử có trong mảng: "));
  if (Number.isInteger(n) && n > 0) {
    break;
  }
}
for (let i = 0; i < n; i++) {
  let input = parseInt(prompt(`Mời nhập phần tử thứ: ${i + 1}`));
  M.push(input);
}
console.log(M);
