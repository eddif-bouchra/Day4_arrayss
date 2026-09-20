let arr = [1, 2, 3, 4, 5, 6]
let i = 0
let count = 0
while(i < arr.length){
    if(arr[i] % 2 === 0){
        count++
    }
    i++
}
console.log(count)