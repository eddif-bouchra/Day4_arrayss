let arr = [3, 7, 3, 9, 3]
let result = []

let i = 0
while(i < arr.length){
    if(arr[i] === 3)
        result.push(i)
    i++
}
console.log(result)