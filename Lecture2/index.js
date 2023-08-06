console.log('hi')
let typeString='avc12asd'
let typeNumber=parseInt(typeString)
// let typeNumber=Number(typeString)
// let typeNumber=+typeString

console.warn(typeNumber,typeof typeNumber)

console.log(3+3)
console.log('3'+'3')
console.log(3+'3'+3)
// Strange behaviour
console.log(3-3)
console.log('3'-3)
console.log('3'-'3')

console.log(3/3)
console.log(3*'3')


// Sum of elements in an array

let sum1=null
let a=[1,2,3,4,5]
for(let i=0;i<a.length;i++)
{
    sum1+=a[i]
}
console.log(sum1)

// Known as for of array
let sum=0
for(let elem of a)
{
    sum+=elem
}
console.log(sum)







