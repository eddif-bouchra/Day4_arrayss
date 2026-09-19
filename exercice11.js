let arr = [1, 2, 4, 5]
let newArr = []
for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i])
    if (arr[i] === 2 && arr[i + 1] === 4)
        newArr.push(3)

}
console.log(newArr)