let arr = [1, 2, 2, 3, 2, 4]
let count = 0
let i = 0
let cible = 2
while(i < arr.length){
    if(arr[i] === cible)
        count++
    i++
}
console.log(count)