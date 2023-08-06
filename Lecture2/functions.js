function addNumbers(x,y)
{
    return x+y
}
console.log(addNumbers(1,3))

//similar to var args in python
// whatever we get in args is nothing but an array
function addMultiple(...args) 
{
    console.log(args)
    
}
addMultiple(1,2,3,4)
// Declaration function ends

// Expression functions:

let subtractNumbers=function(x,y)
{
    return x-y
}
console.log(subtractNumbers(2,1))

// Arrow function
let subtractNumber=(x,y)=> x-y
console.log(subtractNumber(2,1))

// Expression arrow function
// Exponent
let power=(x,y)=>x**y
console.log(power(2,3))

let arr=[1,2,3,4]
let sumArr=(arr)=>
{
    let sum=0
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i]
    }
    return sum

}
console.log(sumArr(arr))

