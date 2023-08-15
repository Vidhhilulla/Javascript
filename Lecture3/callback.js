
function callBack1(callBack2)
{   
    console.log('Function 1 called')
    callBack2()
}


// function callBack2()
// {
//     console.log('Function 2 called')
// }

// Instead of this:

callBack1 (()=>{console.log("CallBack2 called!!!")
console.log("second line")}
)


function callback3()
{
    console.log('callback3 called')
}


function mainFunction(callback3)
{
    console.log("Mainfunction called")
    callback3()
}

// We can change the function at any point of time


mainFunction(callback3)
mainFunction(()=>{console.log('called 1st time')})
mainFunction(()=>{console.log('called 2nd time')})
mainFunction(()=>{console.log('called 3rd time')})
mainFunction(()=>{let v=5;console.log(v)})

// set time out
// has 2 arguments/parameters
// 1st is callback
// 2nd is time in miliseconds
// we say that after that time execute the function sent



function callBackTimeout()
{
    console.warn('callback Timeout')
}
setTimeout(callBackTimeout,5000);
setTimeout(()=>{console.log('callBackTimeout called again')},1000)


// setInterval(()=>{console.log('setInterval called')},5000)

const timeId=setInterval(()=>console.warn('setInterval called again'),5000)
setTimeout(()=>{console.warn('Clearing');
clearInterval(timeId)},13000)


// it returns us a unique id 