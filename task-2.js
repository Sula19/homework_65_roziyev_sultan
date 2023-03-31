myArrNum = [2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = myArrNum.reduce((sum, current) => sum + current, 0)
function avg(arr) {
    return sum / arr.length
}

console.log(avg(myArrNum))