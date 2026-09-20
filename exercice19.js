let arr = [3 ,2 ,10]
let add = 0;
let max = arr[0];
let min = arr[0];
let i = 0
while (i < arr.length) {
   if (arr[i] > max)
        max = arr[i]
    i++
        
}
i = 0
while (i < arr.length) {
    if (arr[i] < min)
        min = arr[i]
    i++
}
add = max - min
console.log(add)