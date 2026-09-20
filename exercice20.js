let arr = [10, 6,30]
let moy = 0
let max = arr[0]
let sum = 0
let i = 0
while(i <arr.length){
    if (arr[i] > max)
       max = arr[i]
    i++
}
    i = 0
    while(i <arr.length){
    if (arr[i] != max)
       sum += arr[i]
    i++ 
}
 moy = sum / (arr.length - 1)
console.log(moy)