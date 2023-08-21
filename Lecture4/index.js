// const elementbycn=document.getElementsByClassName("demo")
// console.log(elementbycn)
// const elem=document.querySelector('h1')
// const elem1=document.querySelectorAll('h2')
// const elem2=document.querySelector('#id1')
// console.log(elem)
// console.log(elem1)
// console.log(elem2)

// html collection and nodelist both are array like structures
// Both are interfaces in js
// html collection is a live collection
// node list can be live cannot be live
// in case by queryselectorall is Static
// cannot apply foreach in html collection




let arr=[1,2,3,4,5]

// preference array ko keep const
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

let sum2=0
for(let elem of arr)
{
    sum2+=elem
}
console.log(sum2)

let sum3=0
arr.forEach((element)=>sum3+element)
console.log(sum3)



const demoClass=document.getElementsByTagName('h2')

console.log(demoClass)

for(let i=0;i<demoClass.length;i++)
{
    console.warn(demoClass[i])
}


const demoClass1=document.querySelectorAll('h2')

console.log(demoClass1)

for(let i=0;i<demoClass1.length;i++)
{
    console.warn(demoClass1[i])
}

demoClass1.forEach((element)=>console.log(element))

// forEach is working on querySelector 










