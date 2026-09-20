let arr = [1, 2, 3]
let i = 0
let tmp = []
while(i < arr.length / 2){
    tmp = arr[i]
    arr[i]= arr[arr.length -1 - i]
    arr[arr.length -1-i] = tmp
    i++
}
console.log(arr)