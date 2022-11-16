    let best = [5, 4 , 3, 2, 1]  
    let best2 = [2, 3, 10, 6, 4, 8, 1]  

const stockBuy = (arr) => {
if (Math.max(...arr) === arr[0]) {
    console.log('0');
}else {
index = arr.findIndex(el => el === Math.max(...arr))
arr.splice(index+1)
console.log(`${Math.max(...arr) - Math.min(...arr)} - buy at ${Math.min(...arr)}, sell at ${Math.max(...arr)} `)
}}

stockBuy(best)
stockBuy(best2)