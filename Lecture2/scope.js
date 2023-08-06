let arr=[5,4,3,21]

let min=(arr)=>
{   
    // console.log(ind)
    // var ind=5
    // console.log(ind)

    // var ind
    // console.log(ind)
    // ind=5

    // console.log(ind)
    // var ind=5

    // var ind
    // console.log(ind)
    // ind=5
    let minelem=arr[0]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<minelem)
        {
            minelem=arr[i]
        }
    }
    console.log(minelem)
    return minelem
}
console.log(min(arr))

// var is function scoped


// const is block scoped
let min1=(arr)=>
{   
   
    const minelem=arr[0]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<minelem)
        {
            minelem=arr[i]
        }
    }
    console.log(minelem)
    return minelem
}
console.log(min1(arr))

