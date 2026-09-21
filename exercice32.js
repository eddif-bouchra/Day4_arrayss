let arr = [1, 2, 2, 3, 1, 4]
let i = 0
let result = []
while(i < arr.length){
    let found = false
    let j = 0
    while(j < result.length){
        if(result[j] === arr[i])
           found = true
        j++
    }
    if(found === false)
        result.push(arr[i])

    i++
}
console.log(result)