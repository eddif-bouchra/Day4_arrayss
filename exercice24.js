
function stats(T) {
  let sum = 0
  let max = T[0]
  let min = T[0]
  let i = 0
  while (i < T.length) {
    sum += T[i]
    moy = sum / T.length
    if (T[i] > max)
      max = T[i]
    if (T[i] < min)
      min = T[i]
    i++
  }
  let average = sum / T.length
  console.log(sum)
  console.log(average)
  console.log(min)
  console.log(max)
}
let arr = [20, 5, 2, 8]
stats(arr)