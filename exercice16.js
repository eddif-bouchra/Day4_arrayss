let arr = [3, 9, 1, 7]
let max = arr[0];
let i = 0
while (i < arr.length) {
    if (arr[i] > max)
        max = arr[i]
    i++
}
console.log(max)