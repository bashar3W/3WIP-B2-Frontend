const arr = [
    {id: 1, value: 100},
    {id: 2, value: 200},
    {id: 3, value: 300},
    {id: 4, value: 400}
]


/**
 *
 * 1. map
 * 2. filter
 * 3. forEach
 * 4. slice
 *
 */


 const findE = arr.map(v=>v.id * 2);

 console.log(findE)

 console.log(arr)