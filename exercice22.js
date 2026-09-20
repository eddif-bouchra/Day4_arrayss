let arr = [4, 9, 2, 9, 1]
let max = arr[0];
let maxIndice = 0
let i = 0
while (i < arr.length) {
    if (arr[i] >max){
        max = arr[i]
        maxIndice = i
    }
        i++
}
console.log(maxIndice)
