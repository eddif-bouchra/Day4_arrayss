let arr = [10, 20, 30]
let sum = 0
let moy = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    moy = sum / arr.length

}
console.log(moy)