let arr = [1, 2, 3, 4, 5];
let tmp = arr[0];
let i = 0;
while (i < arr.length - 1) {
    arr[i] = arr[i + 1];
    i++;
}
arr[arr.length - 1] = tmp
console.log(arr)