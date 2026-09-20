let arr = [10, 21,30]
let sum = 0
let moy = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    moy = sum / arr.length

}
moy = Math.round(moy * 100) / 100
console.log(moy)