let arr = [3, 9, 1, 7]
let min = arr[0];
let i = 0
while (i < arr.length) {
    if (arr[i] < min)
        min = arr[i]
    i++
}
console.log(min)