const arr = [
    {id: 1, value: 100},
    {id: 2, value: 200},
    {id: 3, value: 300},
    {id: 4, value: 400}
]


/**
 *
 * 1. find
 * 2. splice
 * 3. findIndex
 * 4. reverse
 * 5. push
 * 6. pop
 * 7. unshift
 * 8. shift
 * 
 */



 const findE = arr.find(v=>v.id === 2);
 findE.value = 9000

 console.log(arr)