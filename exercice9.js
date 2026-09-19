let tmp = 0;
let tab = [1, 2, 3, 4];
tmp = tab[0];
tab[0] = tab[tab.length - 1]
tab[tab.length - 1] = tmp
console.log(tab);