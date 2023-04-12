const arr = [1,2,3,4,5,6];

const newMap = arr.map((value, index, array)=>{
    return value * 2
})

console.log(newMap)
