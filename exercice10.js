let arr = [10, 20, 30, 40]
let i = 0;
let tmp = [];
while (i < arr.length) {
    if (arr[i] !== 30)
        tmp.push(arr[i]);
    i++;
}
console.log(tmp)