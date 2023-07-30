console.log("hi")
// are many options eg:warn,error

console.log("Before change")
let arr1=[1,2,3,4]
let arr2=[...arr1]
console.log(arr1)
console.log(arr2)
// this will pass by value


// let arr3=arr1
// this is pass by reference

console.log("After change")
console.log(`Changing arr2[2] to 5`)

arr2[2]=5
console.log(arr1)
console.log(arr2)

let obj1={
    "key1":"value1",
    "key2":"value2"
}

let obj2={
    key1:"value1",
    key2:"value2"
}

console.log(obj1)
console.log(obj2)
console.log(obj1.key1)
console.log(obj1["key1"])

console.log(obj1["key2"])
console.log(obj1.key2)

// obj2=obj1;

obj2={...obj1}

obj2.key1="check";
console.log(obj1,obj2);


console.log(1=="1")
console.log(1==="1")


console.log(0==false)

if(0)
console.log("inside if")
else
console.log("inside else")
let toggleIndicitor=0

if(toggleIndicitor)
console.warn("1")
else
console.warn("0")


// examples:
// rs=
// {
//     {"Vidhhi",""}
// }

rs1=[1,2,3,4,5,6,7,{key1:"hello"}]
console.log(rs1[7]?.key1)




