let tab = [1, 2, 6, 3]
let arr = [3, 2, 4, 5]
for (let i = 0; i < arr.length; i++) {
    let kayn = false
    for (let j = 0; j < tab.length; j++) {
        if (tab[j] === arr[i]) {
            kayn = true
            break
        }
    }
    if (!kayn)
        tab.push(arr[i])
}
tab.sort()
console.log(tab)