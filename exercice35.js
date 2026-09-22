let arr = [1, 2, 3, 4, 5, 6]
let pair = []
let impair = []
for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0)
        pair.push(arr[i])
    else
        impair.push(arr[i])
}
console.log("evens:", pair)
console.log("odds:", impair)