let arr = [4, 9, 2, 9, 7]
let i = 0
let max = arr[0]
let Dmax = arr[0]
while(i< arr.length){
    if (arr[i] > max)
        max = arr[i]
    i++

}
i = 0
while(i< arr.length){
    if (arr[i] != max &&  arr[i] > Dmax)
        Dmax = arr[i]
    i++
}
console.log(Dmax)