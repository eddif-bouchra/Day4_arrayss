let arr = [-3, 5, -1, 8, 0]
let count = 0
let i = 0
while (i < arr.length) {
    if (arr[i] < 0)
        count += 1
    i++
}
console.log(count)
