const arr = [1,2,3,4,5,6];

const newMap = (array, callBack) =>{
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(callBack(array[i], i, array))
    }
    return newArr;
}

const r = newMap(arr, (value, index, array)=>{
    return value * 2
})

console.log(r)