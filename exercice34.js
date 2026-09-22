let tab = [1, 2, 3]
let arr = [3,2, 4, 5]
let uniqueTab = []
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
console.log(tab)